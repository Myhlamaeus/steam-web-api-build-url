/* global describe, it, expect */

import steamWebApiBuildUrl from '../../src/steam-web-api-build-url'

describe('steamWebApiFetch', () => {
  it('should format the URL correctly when only interfaceName and methodName are supplied', () => {
    expect(steamWebApiBuildUrl('test', 'test2')).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json')
  })

  it('should allow overwriting the format', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {format: 'xml'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=xml')
  })

  it('should use json as format when format is falsy', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {key: 'test321', format: false})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json&key=test321')
    expect(steamWebApiBuildUrl('test', 'test2', {format: false})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json')
  })

  it('should allow changing the version', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {version: 2})).to.equal('https://api.steampowered.com/Itest/test2/v0002/?format=json')
    expect(steamWebApiBuildUrl('test', 'test2', {version: 12})).to.equal('https://api.steampowered.com/Itest/test2/v0012/?format=json')
    expect(steamWebApiBuildUrl('test', 'test2', {version: 123})).to.equal('https://api.steampowered.com/Itest/test2/v0123/?format=json')
    expect(steamWebApiBuildUrl('test', 'test2', {version: 1234})).to.equal('https://api.steampowered.com/Itest/test2/v1234/?format=json')
  })

  it('should allow changing of the query string', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {query: {test: 1}})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?test=1&format=json')
    expect(steamWebApiBuildUrl('test', 'test2', {query: {test: 1}, format: 'xml'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?test=1&format=xml')
  })

  it('should use empty query when query is falsy', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {key: 'test321', query: false})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json&key=test321')
    expect(steamWebApiBuildUrl('test', 'test2', {query: false})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json')
  })

  it('should allow setting a global key', () => {
    steamWebApiBuildUrl.key = 'test123'
    expect(steamWebApiBuildUrl('test', 'test2')).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json&key=test123')
    expect(steamWebApiBuildUrl('test', 'test2', {query: {test: 1}, format: 'xml'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?test=1&format=xml&key=test123')
    delete steamWebApiBuildUrl.key
  })

  it('should allow setting a per-request key', () => {
    expect(steamWebApiBuildUrl('test', 'test2', {key: 'test321'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json&key=test321')
    expect(steamWebApiBuildUrl('test', 'test2', {query: {test: 1}, format: 'xml', key: 'test321'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?test=1&format=xml&key=test321')
  })

  it('should allow setting a per-request key, even if a global key is defined', () => {
    steamWebApiBuildUrl.key = 'test123'
    expect(steamWebApiBuildUrl('test', 'test2', {key: 'test321'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?format=json&key=test321')
    expect(steamWebApiBuildUrl('test', 'test2', {query: {test: 1}, format: 'xml', key: 'test321'})).to.equal('https://api.steampowered.com/Itest/test2/v0001/?test=1&format=xml&key=test321')
    delete steamWebApiBuildUrl.key
  })
})
