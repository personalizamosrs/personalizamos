# Gera sitemap.xml e atualiza robots.txt a partir dos HTML da raiz.
# Uso (na pasta do site):
#   powershell -ExecutionPolicy Bypass -File tools\generate-sitemap.ps1

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$base = "https://personalizamos.com.br"
$utf8 = New-Object System.Text.UTF8Encoding $false
$today = (Get-Date).ToString("yyyy-MM-dd")

$exclude = @("amigo-secreto-porto-alegre.html","checklist-google-pvc.html")

$pages = Get-ChildItem $root -Filter "*.html" -File |
  Where-Object { $exclude -notcontains $_.Name } |
  Sort-Object Name

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('<?xml version="1.0" encoding="UTF-8"?>')
[void]$sb.AppendLine('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

foreach ($p in $pages) {
  $loc = if ($p.Name -eq "index.html") { "$base/" } else { "$base/$($p.Name)" }
  $priority = if ($p.Name -eq "index.html") { "1.0" }
    elseif ($p.Name -match "datas-especiais|personalizado_produtos|amigo-secreto-presente") { "0.9" }
    else { "0.7" }
  $changefreq = if ($p.Name -eq "index.html") { "weekly" } else { "monthly" }
  [void]$sb.AppendLine("  <url>")
  [void]$sb.AppendLine("    <loc>$loc</loc>")
  [void]$sb.AppendLine("    <lastmod>$today</lastmod>")
  [void]$sb.AppendLine("    <changefreq>$changefreq</changefreq>")
  [void]$sb.AppendLine("    <priority>$priority</priority>")
  [void]$sb.AppendLine("  </url>")
}

[void]$sb.AppendLine("</urlset>")
[System.IO.File]::WriteAllText((Join-Path $root "sitemap.xml"), $sb.ToString(), $utf8)

$robotsBody = @"
User-agent: *
Allow: /

Sitemap: $base/sitemap.xml
"@
[System.IO.File]::WriteAllText((Join-Path $root "robots.txt"), $robotsBody.Trim() + "`n", $utf8)

Write-Host "OK: sitemap.xml ($($pages.Count) URLs) + robots.txt"