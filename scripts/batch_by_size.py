
import os
from pathlib import Path
from shutil import move

# CONFIGURATION
corpus_dir = Path("corpus")  # This should be relative to your root project directory
num_batches = 5              # Adjust the number of batches if needed
output_prefix = "batch_"     # Folder name prefix

# Gather all PDFs and their sizes
pdf_files = [(f, f.stat().st_size) for f in corpus_dir.glob("*.pdf")]
pdf_files.sort(key=lambda x: x[1], reverse=True)  # Sort by size descending

# Initialize empty batches and size counters
batches = [[] for _ in range(num_batches)]
batch_sizes = [0] * num_batches

# Distribute PDFs using a greedy best-fit strategy
for f, size in pdf_files:
    i = batch_sizes.index(min(batch_sizes))  # Find batch with smallest current total
    batches[i].append(f)
    batch_sizes[i] += size

# Create directories and move files into them
for i, group in enumerate(batches, 1):
    batch_folder = corpus_dir / f"{output_prefix}{i:02d}"
    batch_folder.mkdir(exist_ok=True)
    for f in group:
        move(str(f), batch_folder / f.name)

print(f"✅ Distributed {len(pdf_files)} PDFs across {num_batches} batches.")
