import { Text, Heading, BlockText, Br, PixelBorder, Table, Colors, A, Badge, ColorPaletteNames } from "../../dist";

export const ColorPaletteDemo = () => (
    <>
        <Heading size='xlarge' centered>Color Palette</Heading>

        <Text>Any NES UI had a distinct color palette that you&lsquo;ll find resembled here.</Text>
        <Text>For the sake of simplicity, the colors are named intrinsically, like: primary, success, warning, error, disabled, dark, black, white.</Text>

        <Text>On top of that, the whole NES color palette is exported for programmatic use:</Text>

        <Table bordered centered>
            <thead>
                <tr>
                    <th>Hex Value</th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0x00</td>
                    <td style={{ backgroundColor: Colors.color00 }}></td>
                    <td style={{ backgroundColor: Colors.color01 }}></td>
                    <td style={{ backgroundColor: Colors.color02 }}></td>
                    <td style={{ backgroundColor: Colors.color03 }}></td>
                    <td style={{ backgroundColor: Colors.color04 }}></td>
                    <td style={{ backgroundColor: Colors.color05 }}></td>
                    <td style={{ backgroundColor: Colors.color06 }}></td>
                    <td style={{ backgroundColor: Colors.color07 }}></td>
                    <td style={{ backgroundColor: Colors.color08 }}></td>
                    <td style={{ backgroundColor: Colors.color09 }}></td>
                    <td style={{ backgroundColor: Colors.color0A }}></td>
                    <td style={{ backgroundColor: Colors.color0B }}></td>
                    <td style={{ backgroundColor: Colors.color0C }}></td>
                    <td style={{ backgroundColor: Colors.color0D }}></td>
                    <td style={{ backgroundColor: Colors.color0E }}></td>
                    <td style={{ backgroundColor: Colors.color0F }}></td>
                </tr>
                <tr>
                    <td>0x01</td>
                    <td style={{ backgroundColor: Colors.color10 }}></td>
                    <td style={{ backgroundColor: Colors.color11 }}></td>
                    <td style={{ backgroundColor: Colors.color12 }}></td>
                    <td style={{ backgroundColor: Colors.color13 }}></td>
                    <td style={{ backgroundColor: Colors.color14 }}></td>
                    <td style={{ backgroundColor: Colors.color15 }}></td>
                    <td style={{ backgroundColor: Colors.color16 }}></td>
                    <td style={{ backgroundColor: Colors.color17 }}></td>
                    <td style={{ backgroundColor: Colors.color18 }}></td>
                    <td style={{ backgroundColor: Colors.color19 }}></td>
                    <td style={{ backgroundColor: Colors.color1A }}></td>
                    <td style={{ backgroundColor: Colors.color1B }}></td>
                    <td style={{ backgroundColor: Colors.color1C }}></td>
                    <td style={{ backgroundColor: Colors.color1D }}></td>
                    <td style={{ backgroundColor: Colors.color1E }}></td>
                    <td style={{ backgroundColor: Colors.color1F }}></td>
                </tr>
                <tr>
                    <td>0x02</td>
                    <td style={{ backgroundColor: Colors.color20 }}></td>
                    <td style={{ backgroundColor: Colors.color21 }}></td>
                    <td style={{ backgroundColor: Colors.color22 }}></td>
                    <td style={{ backgroundColor: Colors.color23 }}></td>
                    <td style={{ backgroundColor: Colors.color24 }}></td>
                    <td style={{ backgroundColor: Colors.color25 }}></td>
                    <td style={{ backgroundColor: Colors.color26 }}></td>
                    <td style={{ backgroundColor: Colors.color27 }}></td>
                    <td style={{ backgroundColor: Colors.color28 }}></td>
                    <td style={{ backgroundColor: Colors.color29 }}></td>
                    <td style={{ backgroundColor: Colors.color2A }}></td>
                    <td style={{ backgroundColor: Colors.color2B }}></td>
                    <td style={{ backgroundColor: Colors.color2C }}></td>
                    <td style={{ backgroundColor: Colors.color2D }}></td>
                    <td style={{ backgroundColor: Colors.color2E }}></td>
                    <td style={{ backgroundColor: Colors.color2F }}></td>
                </tr>
                <tr>
                    <td>0x03</td>
                    <td style={{ backgroundColor: Colors.color30 }}></td>
                    <td style={{ backgroundColor: Colors.color31 }}></td>
                    <td style={{ backgroundColor: Colors.color32 }}></td>
                    <td style={{ backgroundColor: Colors.color33 }}></td>
                    <td style={{ backgroundColor: Colors.color34 }}></td>
                    <td style={{ backgroundColor: Colors.color35 }}></td>
                    <td style={{ backgroundColor: Colors.color36 }}></td>
                    <td style={{ backgroundColor: Colors.color37 }}></td>
                    <td style={{ backgroundColor: Colors.color38 }}></td>
                    <td style={{ backgroundColor: Colors.color39 }}></td>
                    <td style={{ backgroundColor: Colors.color3A }}></td>
                    <td style={{ backgroundColor: Colors.color3B }}></td>
                    <td style={{ backgroundColor: Colors.color3C }}></td>
                    <td style={{ backgroundColor: Colors.color3D }}></td>
                    <td style={{ backgroundColor: Colors.color3E }}></td>
                    <td style={{ backgroundColor: Colors.color3F }}></td>
                </tr>
            </tbody>
        </Table>

        <Br />

        <Text>For example, a color can be constructed by choosing the first character of the color index from the row, such as: 0, 1, 2 or 3 and the second character from the column such as 0 to 9 or A to F:</Text>

        <Br />

        <Text>A few examples:</Text>

        <Br />

        <PixelBorder style={{ marginRight: '1.4em', marginBottom: '1em', padding: 0, display: 'inline-block' }}>
            <BlockText shadow shadowInverted backgroundColor={Colors.color38} style={{ margin: 0 }}>
                color38
            </BlockText>
        </PixelBorder>

        <PixelBorder style={{ marginRight: '1.4em', marginBottom: '1em', padding: 0, display: 'inline-block' }}>
            <BlockText shadow shadowInverted backgroundColor={Colors.color2C} style={{ margin: 0 }}>
                color2C
            </BlockText>
        </PixelBorder>

        <PixelBorder style={{ marginRight: '1.4em', marginBottom: '1em', padding: 0, display: 'inline-block' }}>
            <BlockText shadow shadowInverted backgroundColor={Colors.color35} style={{ margin: 0 }}>
                color35
            </BlockText>
        </PixelBorder>

        <Br />

        <Text>The whole plallete is based on the <A href="https://en.wikipedia.org/wiki/List_of_video_game_console_palettes#NES" target="_blank">official NES color palette</A>.</Text>

        <Heading size="medium">Named colors</Heading>

        <Text>The NES color palette comes handy for picking primary colors of an app. However in web development, named colors:</Text>
        <Badge backgroundColor={"primary"} text="primary" />
        <Badge backgroundColor={"disabled"} text="disabled" />
        <Badge backgroundColor={"success"} text="success" />
        <Badge backgroundColor={"warning"} text="warning" />
        <Badge backgroundColor={"error"} text="error" />
    </>
)
export default ColorPaletteDemo