var userPhoto = { server: null,
  meta: null,
  input: 
   { name: 'npm.jpg',
     type: 'image/jpeg',
     size: 8430,
     width: 320,
     height: 240 },
  output: 
   { width: 320,
     height: 240,
     image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADwAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzSiiivz8/sMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiik/2F3t/u0ALRSbZP8Ani//AHw1O2yf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' },
  actions: 
   { rotation: null,
     crop: { x: 0, y: 0, height: 240, width: 320, type: 'auto' },
     size: { width: 320, height: 240 } } };

module.exports = userPhoto;