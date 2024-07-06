<template>
  <main>
    <h1>DeviceMotion Event Demo</h1>
    <p>Move your device to see the motion data.</p>
    <div id="output">
        Accelerometer: <br>
        x: <span id="accel-x">0</span> <br>
        y: <span id="accel-y">0</span> <br>
        z: <span id="accel-z">0</span> <br>
        <br>
        Gyroscope: <br>
        alpha: <span id="gyro-alpha">0</span> <br>
        beta: <span id="gyro-beta">0</span> <br>
        gamma: <span id="gyro-gamma">0</span> <br>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Title",
      htmlAttrs: {
        lang: "en"
      }
    })

    function handleMotion(event) {
  console.log(233)
    let accelX = document.getElementById('accel-x');
    let accelY = document.getElementById('accel-y');
    let accelZ = document.getElementById('accel-z');
    let gyroAlpha = document.getElementById('gyro-alpha');
    let gyroBeta = document.getElementById('gyro-beta');
    let gyroGamma = document.getElementById('gyro-gamma');

    if (event.acceleration) {
        accelX.textContent = event.acceleration.x ? event.acceleration.x.toFixed(2) : 'N/A';
        accelY.textContent = event.acceleration.y ? event.acceleration.y.toFixed(2) : 'N/A';
        accelZ.textContent = event.acceleration.z ? event.acceleration.z.toFixed(2) : 'N/A';
    }

    if (event.rotationRate) {
        gyroAlpha.textContent = event.rotationRate.alpha ? event.rotationRate.alpha.toFixed(2) : 'N/A';
        gyroBeta.textContent = event.rotationRate.beta ? event.rotationRate.beta.toFixed(2) : 'N/A';
        gyroGamma.textContent = event.rotationRate.gamma ? event.rotationRate.gamma.toFixed(2) : 'N/A';
    }
}

// Check if DeviceMotionEvent is supported
if (typeof DeviceMotionEvent !== 'undefined') {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', handleMotion);
                } else {
                    document.getElementById('output').innerHTML = 'Permission to access motion data was denied.';
                }
            })
            .catch(console.error);
            console.log(444)
    } else {
        // No permission required; add event listener
        window.addEventListener('devicemotion', handleMotion);
        console.log(223)
    }
} else {
    document.getElementById('output').innerHTML = 'DeviceMotionEvent is not supported on this device.';
    console.log(123)
} 
  },
  data() {}
}
</script>
