Add-Type -AssemblyName System.Drawing

$src = "C:\Users\idder\tmg\OGH-rework\initial\ElevenLabs_image_gpt-image-2_Ultra-high-fide_2026-06-17T20_32_40.png"
$out = "C:\Users\idder\tmg\OGH-rework\ocean-glory-homes\public\images"

$original = [System.Drawing.Image]::FromFile($src)
Write-Host "Source: $($original.Width) x $($original.Height)"

function Save-Crop {
  param($image, $x, $y, $w, $h, $name, $quality = 92)
  $rect = [System.Drawing.Rectangle]::new($x, $y, $w, $h)
  $bmp  = [System.Drawing.Bitmap]::new($w, $h)
  $g    = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($image, [System.Drawing.Rectangle]::new(0, 0, $w, $h), $rect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()

  $destPath = Join-Path $out $name
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $params = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $params.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    [System.Drawing.Imaging.Encoder]::Quality, [long]$quality
  )
  $bmp.Save($destPath, $codec, $params)
  $bmp.Dispose()
  Write-Host "Saved: $destPath"
}

# ── hero-mansion.jpg ──────────────────────────────────────────────────────────
# Crop the entire hero section (y=0-1159) including mansion + gradient + sky.
# Using objectPosition:center top in CSS so the house is visible at top of frame.
# The HTML gradient overlay darkens the bottom, the HTML headline renders above the photo.
Save-Crop $original 0 0 2160 1100 "hero-mansion.jpg" 95

# ── blueprint-to-house.jpg ────────────────────────────────────────────────────
# Section 2 artifact (confirmed working crop)
Save-Crop $original 70 1790 2020 720 "blueprint-to-house.jpg" 95

# ── Listing thumbnails ────────────────────────────────────────────────────────
# Verified from diagnostic strip (y=900-1500): cards are at full-image y≈916-1159
# Thumbnail positions (verified visually × 1.08 scale factor):
# Card 1 (Cape Velero):   strip x=81-292  → full image x=81,  y=916, w=211, h=243
# Card 2 (Laguna Vista):  strip x=589-810 → full image x=589, y=916, w=221, h=243
# Card 3 (Harbor Key):    strip x=1107-1323→ full image x=1107,y=916, w=216, h=243
Save-Crop $original   81 916 211 243 "listing-1511-cape-velero.jpg" 92
Save-Crop $original  589 916 221 243 "listing-1802-laguna-vista.jpg" 92
Save-Crop $original 1107 916 216 243 "listing-2324-harbor-key.jpg" 92

# Clean up debug image
Remove-Item (Join-Path $out "DEBUG-strip-y900-1500.jpg") -ErrorAction SilentlyContinue

$original.Dispose()
Write-Host "Done."
