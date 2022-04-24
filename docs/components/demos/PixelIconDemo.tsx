import { isDarkModeActive, Container, Row, PixelIcon, A, Text, List, Heading, TextArea, Button, Colors } from "../../dist";

import { FileUploader } from "react-drag-drop-files";

// @ts-ignore
import styles from '../../styles/Index.module.css';
import { useEffect, useState } from "react";
import { convertImageToSvg, getCssClassCode, getDownloadStream, SUPPORTED_IMAGE_FILE_TYPES, SvgImage, svgToBase64DataUrl } from "../../function/imageToSvg";

export const PixelIconDemo = () => {  
        
    const [file, setFile] = useState(null);
    const [svgImage, setSvgImage] = useState<SvgImage>(null);
    const [svgDataUrl, setSvgDataUrl] = useState(null);
    const [cssClassCode, setCssClassCode] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const darkMode = isDarkModeActive();

    useEffect(() => {
        ;(async() => {
            const svgImage = await convertImageToSvg(file);

            if (svgImage === null) return;

            setSvgImage(svgImage)
            setCssClassCode(getCssClassCode(svgImage))
            // preview image
            setSvgDataUrl(svgToBase64DataUrl(svgImage.svg))
        })()
    }, [file])

    return (
        <>
            <Container title='&lt;PixelIcon&gt;'>

                <Row>
                    <Text>PixelIcons are small images with a canvas size of 8x8, 16x16 or 32x32 pixels. They automatically invert their color when displayed in dark mode, therefore they look best when drawn in monochrome base color #000000.</Text>
                </Row>

                <Row style={{ display: 'flex' }}>
                    <PixelIcon inverted={darkMode} name="pixelicon-checkmark" size="small" style={{ marginRight: 10 }} />
                    <PixelIcon inverted={darkMode} name="pixelicon-checkmark" size="medium" style={{ marginRight: 10 }}  />
                    <PixelIcon inverted={darkMode} name="pixelicon-checkmark" size="large" style={{ marginRight: 10 }}  />
                </Row>

                <Text>Sizes:</Text>

                <List size="small" styleType="circle">
                    <li>small: 16 px</li>
                    <li>medium: 24 px</li>
                    <li>large: 32 px</li>
                </List>

                <Text>Pixel width + height: 1 px</Text>

                <Text color="disabled">
                    &gt; Create your own PixelIcons with&nbsp;
                    <A href="https://www.pixilart.com/kyr0/gallery" target={"_blank"}>kyr0 @ PixilArt.com</A>
                    Note that icons look most nostalgic when you draw them in 8x8 pixel raster, monochrome.
                </Text>
            </Container>

            <Container title='Pixelart (PNG, JPG, ...) to SVG converter' >
                <Text>Once you've created such an Icon, you'd probably like to convert it into such an base64-inlined icon CSS class as we usually do. Just drag and drop the PNG file here:</Text>
                
                <div style={{ border: `4px dashed ${Colors.color10}` }}>
                    <FileUploader classes={`${styles.dropRegion}`} label="Drop image file here..." hoverTitle="Drop now!" handleChange={handleChange} name="file" types={SUPPORTED_IMAGE_FILE_TYPES} />
                </div>

                {svgImage && (
                    <>
                        <Heading size="medium" style={{ marginTop: 20 }} dense>SVG</Heading>
                        <TextArea  color="success" style={{ backgroundColor: '#000', marginBottom: 25 }} rows={6} value={svgImage.svg} />
                        
                        <img className={darkMode ? 'invert' : ''} style={{ maxWidth: '80vw', marginRight: 20 }} src={svgDataUrl} width={svgImage.width} height={svgImage.height} />

                        <img className={darkMode ? 'invert' : ''} style={{ maxWidth: '80vw', marginRight: 20 }} src={svgDataUrl} width={svgImage.width*2} height={svgImage.height*2} />

                        <img className={darkMode ? 'invert' : ''} style={{ maxWidth: '80vw' }} src={svgDataUrl} width={svgImage.width*4} height={svgImage.height*4} />
                    </>
                )}

                {cssClassCode && (
                    <>
                        <Heading size="small" style={{ marginTop: 20 }} dense>&lt;PixelIcon&gt; CSS code</Heading>
                        <TextArea color="warning" style={{ backgroundColor: '#000' }} rows={6} value={cssClassCode} />
                    
                        <A href={getDownloadStream(cssClassCode)} dense download={`${svgImage.cssClassName}.css`} transparent>
                            <Button color="primary">Download: {svgImage.cssClassName}.css</Button>
                        </A>
                    </>
                )}

            </Container>
        </>
    )
}
export default PixelIconDemo