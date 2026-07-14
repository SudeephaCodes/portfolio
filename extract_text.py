import pymupdf
import sys
sys.stdout.reconfigure(encoding='utf-8')
doc = pymupdf.open("Assets/Resume/Sudeepha.R.pdf")
for page in doc:
    print(page.get_text())
