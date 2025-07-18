import os
import shutil

# -----------------------------
# Configuration
# -----------------------------
ROOT_DIR = r"C:\GitHub\aimoralcode"
ARCHIVE_DIR = os.path.join(ROOT_DIR, "archive_index_files")

# Create archive folder if it doesn't exist
os.makedirs(ARCHIVE_DIR, exist_ok=True)

# Whitelisted files (relative paths from ROOT_DIR)
KEEP_LIST = {
    "index.md",
    "_posts/index.md",
    "blog-ai/index.html",
}

# Normalize keep paths
KEEP_PATHS = {os.path.normpath(os.path.join(ROOT_DIR, path)) for path in KEEP_LIST}

# -----------------------------
# Search and move unused index.* files
# -----------------------------
def is_index_file(file):
    return file.startswith("index.") and file.split(".")[-1] in {"md", "html", "js", "ts", "d.ts", "markdown", "rb"}

moved_files = []

for subdir, _, files in os.walk(ROOT_DIR):
    for file in files:
        if is_index_file(file):
            full_path = os.path.normpath(os.path.join(subdir, file))

            if full_path not in KEEP_PATHS:
                rel_path = os.path.relpath(full_path, ROOT_DIR)
                dest_path = os.path.join(ARCHIVE_DIR, rel_path.replace(os.sep, "_"))

                shutil.move(full_path, dest_path)
                moved_files.append(rel_path)

# -----------------------------
# Report
# -----------------------------
print("Archived the following unused index files:")
for f in moved_files:
    print(" -", f)

if not moved_files:
    print("No unused index files were found.")
