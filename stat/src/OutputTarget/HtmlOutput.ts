import fs from 'fs'

export default class HtmlOutput{
    print = (report:string):void=>{
        let html = `<html>
                        <div>
                            <h2>Analysis Output</h2>
                            <p> ${report} </p>
                        </div>
                    </html>`
        fs.writeFileSync('result.html',html);
    }
}