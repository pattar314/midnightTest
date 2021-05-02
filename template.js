
export default ({body, css}) => {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style src='/src/client/styles'>
            <title>Midnight test</title>
        </head>
        <body>
            <div id='root'>${body}</div>
            <script type="text/javascript" type="module" src="/dist/main.js">
        </body>
        </html>`
    )
}

 