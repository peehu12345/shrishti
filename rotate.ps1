Add-Type -AssemblyName System.Drawing
function FixOrientation($path, $rotation) {
  $img = [System.Drawing.Image]::FromFile($path)
  $img.RotateFlip($rotation)
  $img.Save($path)
  $img.Dispose()
  Write-Host "Rotated $path"
}
FixOrientation 'C:\Users\91969\Desktop\shrishti\public\images\media__1779601627054.jpg' 'Rotate270FlipNone'
FixOrientation 'C:\Users\91969\Desktop\shrishti\public\images\gallery1.jpg' 'Rotate270FlipNone'
FixOrientation 'C:\Users\91969\Desktop\shrishti\public\images\gallery2.jpg' 'Rotate270FlipNone'
FixOrientation 'C:\Users\91969\Desktop\shrishti\public\images\gallery3.jpg' 'Rotate270FlipNone'
