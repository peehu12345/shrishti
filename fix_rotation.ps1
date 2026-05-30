Add-Type -AssemblyName System.Drawing

function FixOrientation($path, $rotation) {
  $img = [System.Drawing.Image]::FromFile($path)
  $img.RotateFlip($rotation)
  $img.Save($path)
  $img.Dispose()
  Write-Host "Rotated $path with $rotation"
}

FixOrientation "C:\Users\91969\Desktop\shrishti\public\images\gallery3.jpg" "Rotate90FlipNone"
FixOrientation "C:\Users\91969\Desktop\shrishti\public\images\media__1779601627060.jpg" "Rotate270FlipNone"
