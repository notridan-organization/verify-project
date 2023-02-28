pub fn checkAPIKEY(api_key: impl AsRef<str>) -> bool {}

#[derive(Debug)]
enum ApiKeyErrors {
    INVALID,
    NOTFOUND,
    DISABLED,
}

fn errorApiJson(typeError: ApiKeyErrors) -> String {
    match typeError {
        ApiKeyErrors::INVALID => json!({
           "error": format!("API KEY INVALID"),
           "error_code": ApiKeyErrors::INVALID as u32
        })
        .to_string(),
        ApiKeyErrors::NOTFOUND => json!({
            "error": format!("API KEY NOT FOUND"),
            "error_code": ApiKeyErrors::NOTFOUND as u32
        })
        .to_string(),
        ApiKeyErrors::DISABLED => json!({
            "error": format!("API KEY DISABLED"),
            "error_code": ApiKeyErrors::DISABLED as u32
        })
        .to_string(),
    }
}
