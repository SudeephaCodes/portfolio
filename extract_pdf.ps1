$bytes = [System.IO.File]::ReadAllBytes("Assets\Resume\Sudeepha.R.pdf")
$text = [System.Text.Encoding]::UTF8.GetString($bytes)
$lines = $text -split "`r?`n"
foreach ($line in $lines) {
    $clean = $line -replace '[^\x20-\x7E]', ''
    if ($clean.Trim().Length -gt 2) {
        Write-Output $clean.Trim()
    }
}
