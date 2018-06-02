import svgwrite, math

def makeHex(x, y, scale):
    root3 = scale*math.sqrt(3)
    return [(x,y),
            (x+(root3/2),y+scale*0.5),
            (x+root3,y),
            (x+root3,y-scale*1),
            (x+(root3/2),y-scale*1.5),
            (x,y-scale*1)]

def hexGrid(col, row, size):
    svg_document = svgwrite.Drawing(filename = "test-svgwrite.svg", size = ("1920px", "1080px"))
    for i in range(col):
        for j in range(row):
            hex = svg_document.add(svg_document.polygon(
                                        id = "hex" + str(i%2),
                                        points = makeHex((i-(j%2)/2)*size*math.sqrt(3),j*size*1.5, size),
                                        stroke_width = "2",
                                        stroke = "black",
                                        fill = "rgb(1,177,185)"))
    print(svg_document.tostring())
    svg_document.save()



hexGrid(23, 16, 50)
