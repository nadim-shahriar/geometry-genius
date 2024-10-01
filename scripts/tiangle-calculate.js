function triangleCalculateArea (){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
    const base = parseFloat(triangleBaseInput.value)
    
    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeightInput.value)

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area)

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area   
}

function rectangleCalculateArea (){
    // get rectangle wide value
    const rectangleWideInput = document.getElementById('rectangle-wide');
    const wide = parseFloat(rectangleWideInput.value)

    // get rectangle length value 
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const length = parseFloat(rectangleLengthInput.value)
    
    // calculate of rectangle area
    const area = wide * length
    console.log(area)

    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = area

}