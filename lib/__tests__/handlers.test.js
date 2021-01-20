const handlers = require('../handlers')


describe('./lib/handlers.js', () => {
  let req = null
  let res = null
  beforeEach(() => {
    req = {}
    res = { render: jest.fn(), status: jest.fn() }
  })

  test('renders home page', () => {
    handlers.home(req, res)
    expect(res.render.mock.calls.length).toEqual(1)
    expect(res.render.mock.calls[0][0]).toBe('home')
  })

  test('renders about page', () => {
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toEqual(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
      fortune: expect.stringMatching(/\W/)
    }))
  })

  test('renders 404 error', () => {
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toEqual(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
  })

  test('renders 500 server Error', () => {
    err = new Error()
    next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toEqual(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
  })
})


