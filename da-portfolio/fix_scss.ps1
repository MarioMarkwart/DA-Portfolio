$scssFiles = Get-ChildItem -Recurse -Filter '*.scss'
foreach ($file in $scssFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($content -match '@use .*/styles\.scss.* as styles') {
        $newContent = $content -replace '@use "([^"]+)/styles\.scss" as styles', '@use "$1/variables" as styles'
        Set-Content $file.FullName $newContent -NoNewline -Encoding UTF8
        Write-Host "Fixed: $($file.FullName)"
    }
}
Write-Host "Done."
