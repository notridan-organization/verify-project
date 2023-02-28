use crate::modules::api::router::router_api::apiRouter;
use rocket::{Ignite, Rocket};

pub struct VerifyServer {}

impl VerifyServer {
    pub async fn new() -> Result<Rocket<Ignite>, rocket::Error> {
        rocket::build().mount("/api", apiRouter()).launch().await
    }
}
