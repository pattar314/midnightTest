
export default ({body}) => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
            <title>Midnight test</title>
            <link href="/dist/main.css" type="text/css" rel="stylesheet">
            
        </head>
        <body>
            <div id='root'>${body}</div>
            <div id='toRemove'> </div>
            <script defer type"text/javascript" src="/dist/bundle.js"></script>
        </body>
        
        </html>`
}

 
