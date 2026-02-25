import os
from pathlib import Path
from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_talisman import Talisman
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv


db = SQLAlchemy()
migrate = Migrate()
limiter = Limiter(
    key_func=get_remote_address, default_limits=["200 per day", "50 per hour"]
)


def create_app() -> Flask:
    load_dotenv()

    app = Flask(
        "aeroflow",
        static_folder="static",
        static_url_path="/assets",
    )
    app.config["SECRET_KEY"] = os.getenv("APP_SECRET_KEY", "dev-secret-change-me")
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL", "sqlite:///app.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    Talisman(
        app,
        force_https=False,
        content_security_policy=None,
    )
    limiter.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)

    @app.get("/health")
    def health():
        return jsonify({"status": "ok"})

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def catch_all(path: str):
        static_path = Path(app.static_folder) / path

        if path and static_path.is_file():
            return send_from_directory(app.static_folder, path)

        return app.send_static_file("index.html")

    return app
