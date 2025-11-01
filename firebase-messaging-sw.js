// Firebase Messaging Service Worker for GO! Express Merchant App
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDgFNjNpYoyeu_xieGGhLQBKAgAtS1AcZA",
  authDomain: "goexpress-40010.firebaseapp.com",
  projectId: "goexpress-40010",
  storageBucket: "goexpress-40010.appspot.com",
  messagingSenderId: "835503975940",
  appId: "1:835503975940:web:32679ec7e4a59f759f0f51",
  measurementId: "G-ZJTT9G4PXR"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'GO! Express';
  const notificationOptions = {
    body: payload.notification?.body || 'New message received',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    tag: 'chatwoot-notification',
    requireInteraction: true,
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', function(event) {
  console.log('[firebase-messaging-sw.js] Notification click received.');

  event.notification.close();

  // Focus or open the app
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});









