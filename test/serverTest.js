const test = require('tape');
const shot = require('shot');
const router = require('../src/router');

test('tape is working', t => {
  t.equal(1, 1, 'one equals one');
  t.end();
});

test('Testing roter 404', t => {
  shot.inject(router, { method: 'get', url: '/fin&king&vered&hello' }, res => {
    t.equal(res.statusCode, 404, 'should respon with 404');
    t.end();
  });
});

test('Testing router to css', t => {
  shot.inject(router, { method: 'get', url: '/style.css' }, res => {
    t.equal(res.statusCode, 200, 'should respon witn statusCode 200');
    t.equal(
      res.headers['Content-Type'],
      'text/css',
      'should respind with Content-Type text/css'
    );
    t.end();
  });
});

test('Testing router to index.html', t => {
  shot.inject(router, { method: 'get', url: '/' }, res => {
    t.equal(res.statusCode, 200, 'should respon witn statusCode 200');
    t.equal(
      res.headers['Content-Type'],
      'text/html',
      'should respind with content-type text/html'
    );
    t.end();
  });
});

test('Testing router to js', t => {
  shot.inject(router, { method: 'get', url: '/js/dom.js' }, res => {
    t.equal(res.statusCode, 200, 'should respon witn statusCode 200');
    t.equal(
      res.headers['Content-Type'],
      'application/json',
      'should respind with Content-Type application/json'
    );
  });
  shot.inject(router, { method: 'get', url: '/js/fetch.js' }, res => {
    t.equal(res.statusCode, 200, 'should respon witn statusCode 200');
    t.equal(
      res.headers['Content-Type'],
      'application/json',
      'should respind with Content-Type application/json'
    );
  });
  shot.inject(router, { method: 'get', url: '/js/maps.js' }, res => {
    t.equal(res.statusCode, 200, 'should respon witn statusCode 200');
    t.equal(
      res.headers['Content-Type'],
      'application/json',
      'should respind with Content-Type application/json'
    );
  });
  t.end();
});
