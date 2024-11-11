# PowerShell script to run npm start 5 times with a 5-minute delay between runs

$runs = 5
$waitTime = 900 # 15 minutes in seconds

for ($i = 1; $i -le $runs; $i++) {
    Write-Output "Starting run #$i"
    Start-Process -NoNewWindow -Wait -FilePath "npm" -ArgumentList "start"
    
    # Wait for 5 minutes between runs, except after the last one
    if ($i -lt $runs) {
        Write-Output "Waiting for 15 minutes before the next run..."
        Start-Sleep -Seconds $waitTime
    }
}

Write-Output "Completed all runs."
