export const banner = (
  title,
  description,
  repo,
  hp,
  ver,
  year,
  license,
  author,
  isNode
) => {
  let copy = ''

  if (title !== '')
    copy += `${title}
`
  copy += description

  const header = isNode
    ? `#!/usr/bin/env node
/*!`
    : '/*!'

  return `${header}
${copy}

Version: ${ver}
License: ${license}

Repository: ${repo}
Documents: ${hp}

Copyright (c) ${year} ${author}
*/`
}
