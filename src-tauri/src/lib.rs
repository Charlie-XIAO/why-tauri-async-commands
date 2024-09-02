use std::{thread, time};

#[tauri::command]
fn greet_sync(name: &str) -> String {
    thread::sleep(time::Duration::from_secs(5));
    format!("Hello, {}! You've been greeted from Rust synchronously!", name)
}

#[tauri::command]
async fn greet_async(name: &str) -> tauri::Result<String> {
    async_std::task::sleep(time::Duration::from_secs(5)).await;
    Ok(format!("Hello, {}! You've been greeted from Rust asynchronously!", name))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet_sync, greet_async])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
