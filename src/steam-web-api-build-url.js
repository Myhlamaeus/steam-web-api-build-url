import {format as urlFormat} from 'url'
import pad from 'pad'

export default function steamWebApiBuildUrl (interfaceName, methodName, {query = {}, version = 1, key = false, format = 'json'} = {}) {
  query = Object.assign({}, query || {})
  query.format = format || 'json'
  query.key = key || steamWebApiBuildUrl.key
  if (!query.key) {
    delete query.key
  }
  version = `v${pad(4, String(version), '0')}`

  return urlFormat({
    protocol: 'https',
    hostname: 'api.steampowered.com',
    pathname: `/I${interfaceName}/${methodName}/${version}/`,
    query
  })
}
