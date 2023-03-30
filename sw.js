if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('Service Worker Registered', registration);
      })
      .catch(function(error) {
        console.log('Service Worker Registration Failed', error);
      });
  }
  
  self.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    console.log('beforeinstallprompt event fired');
    return false;
  });
  