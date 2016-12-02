var userPhoto = { server: null,
  meta: null,
  input: 
   { name: 'mongodb.jpg',
     type: 'image/jpeg',
     size: 7647,
     width: 320,
     height: 240 },
  output: 
   { width: 320,
     height: 240,
     image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADwAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5qooortOQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACii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' },
  actions: 
   { rotation: null,
     crop: { x: 0, y: 0, height: 240, width: 320, type: 'auto' },
     size: { width: 320, height: 240 } } };

module.exports = userPhoto;