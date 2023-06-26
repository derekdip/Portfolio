import { Palette, GetPaletteContext, SetPaletteContext } from "@styles/paletteContext";
import {  useState } from "react";
import { H1, H2, } from "./text";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "@styles/settings.module.css"
import { ColorInput } from "./customForms";

const Settings: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className,style}) => {
    const selectedPalette = GetPaletteContext()
    const setSelectedPalette=SetPaletteContext()


    const [show, setShow] = useState(false);
    const [localPalette,setLocalPalette]= useState<Palette>(selectedPalette)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleGlobalColorChange=() => {
        handleClose()
        setSelectedPalette(localPalette)
    }
    const parseColorInput=(color:string)=>{
        if(color.charAt(0)!='#'){
            return "#"+color
        }
        return color
    }

    return(
        <>
        <div className={`${className} ${styles.settings}`} style={style} onClick={handleShow} >
            <svg  width="30" height="30" viewBox="0 0 177 168" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={selectedPalette.quaternary} d="M88.2918 114.475C71.2905 114.475 57.4923 100.677 57.4923 83.6759C57.4923 66.6746 71.2905 52.8764 88.2918 52.8764C105.293 52.8764 119.091 66.6746 119.091 83.6759C119.091 100.677 105.293 114.475 88.2918 114.475ZM88.2918 65.1962C78.1074 65.1962 69.8121 73.4915 69.8121 83.6759C69.8121 93.8602 78.1074 102.156 88.2918 102.156C98.4761 102.156 106.771 93.8602 106.771 83.6759C106.771 73.4915 98.4761 65.1962 88.2918 65.1962Z"/>
            <path fill={selectedPalette.quaternary} d="M114.656 167.367C112.931 167.367 111.207 167.12 109.482 166.71C104.39 165.313 100.119 162.11 97.4084 157.593L96.4228 155.95C91.5771 147.573 84.9244 147.573 80.0786 155.95L79.1752 157.511C76.4648 162.11 72.1939 165.395 67.1018 166.71C61.9275 168.106 56.5889 167.367 52.0716 164.656L37.9449 156.525C32.9349 153.651 29.3211 148.969 27.7606 143.302C26.2822 137.635 27.0214 131.804 29.896 126.793C32.2778 122.605 32.9349 118.827 31.5387 116.445C30.1424 114.063 26.6107 112.667 21.765 112.667C9.7737 112.667 0 102.893 0 90.9018V76.4466C0 64.4554 9.7737 54.6817 21.765 54.6817C26.6107 54.6817 30.1424 53.2854 31.5387 50.9036C32.9349 48.5218 32.36 44.7437 29.896 40.555C27.0214 35.5449 26.2822 29.6314 27.7606 24.0465C29.239 18.3794 32.8528 13.6978 37.9449 10.8232L52.1538 2.69217C61.4347 -2.81066 73.6723 0.392478 79.2573 9.83765L80.2429 11.4803C85.0887 19.8577 91.7413 19.8577 96.5871 11.4803L97.4906 9.91978C103.076 0.392478 115.313 -2.81066 124.676 2.7743L138.803 10.9054C143.813 13.78 147.427 18.4615 148.987 24.1286C150.466 29.7957 149.726 35.6271 146.852 40.6371C144.47 44.8258 143.813 48.6039 145.209 50.9857C146.605 53.3675 150.137 54.7638 154.983 54.7638C166.974 54.7638 176.748 64.5375 176.748 76.5287V90.984C176.748 102.975 166.974 112.749 154.983 112.749C150.137 112.749 146.605 114.145 145.209 116.527C143.813 118.909 144.388 122.687 146.852 126.876C149.726 131.886 150.548 137.799 148.987 143.384C147.509 149.051 143.895 153.733 138.803 156.607L124.594 164.738C121.473 166.463 118.106 167.367 114.656 167.367ZM88.2918 136.978C95.6015 136.978 102.418 141.577 107.1 149.708L108.003 151.269C108.989 152.994 110.632 154.226 112.603 154.718C114.574 155.211 116.545 154.965 118.188 153.979L132.397 145.766C134.532 144.534 136.175 142.481 136.832 140.017C137.489 137.553 137.16 135.007 135.928 132.871C131.247 124.822 130.672 116.527 134.286 110.203C137.899 103.879 145.373 100.265 154.737 100.265C159.993 100.265 164.182 96.0761 164.182 90.8197V76.3645C164.182 71.1902 159.993 66.9193 154.737 66.9193C145.373 66.9193 137.899 63.3055 134.286 56.9813C130.672 50.6572 131.247 42.3619 135.928 34.3129C137.16 32.1775 137.489 29.6314 136.832 27.1675C136.175 24.7035 134.614 22.7324 132.479 21.4182L118.27 13.2872C114.738 11.1518 110.057 12.3837 107.921 15.9975L107.018 17.558C102.336 25.6891 95.5194 30.2885 88.2097 30.2885C80.8999 30.2885 74.083 25.6891 69.4015 17.558L68.498 15.9154C66.4447 12.4659 61.8453 11.2339 58.3137 13.2872L44.1048 21.5004C41.9694 22.7324 40.3268 24.7856 39.6697 27.2496C39.0127 29.7136 39.3412 32.2597 40.5732 34.3951C45.2547 42.444 45.8296 50.7393 42.2158 57.0635C38.602 63.3876 31.128 67.0014 21.765 67.0014C16.5085 67.0014 12.3198 71.1902 12.3198 76.4466V90.9018C12.3198 96.0761 16.5085 100.347 21.765 100.347C31.128 100.347 38.602 103.961 42.2158 110.285C45.8296 116.609 45.2547 124.904 40.5732 132.953C39.3412 135.089 39.0127 137.635 39.6697 140.099C40.3268 142.563 41.8873 144.534 44.0227 145.848L58.2315 153.979C59.9563 155.047 62.0096 155.293 63.8986 154.8C65.8698 154.308 67.5124 152.994 68.5801 151.269L69.4836 149.708C74.1651 141.659 80.9821 136.978 88.2918 136.978Z"/>
            </svg>
        </div>

        <Modal show={show} onHide={handleClose}>
            <div style={{backgroundColor:selectedPalette.secondary}}>
            <Modal.Header closeButton style={{ borderWidth:0 }}>
            <H1 style={{color: selectedPalette.primary }}>Color Palette</H1>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row>
                <Col>
                    <Form.Group >
                        <ColorInput title="Primary" startingColor={selectedPalette.primary} setColor={(color:string)=>{
                            setLocalPalette({...localPalette, primary:parseColorInput(color)})
                        }}/>
                        
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <ColorInput title="Secondary" startingColor={selectedPalette.secondary} setColor={(color:string)=>{
                                setLocalPalette({...localPalette, secondary:parseColorInput(color)})
                            }}/>
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col >
                    <Form.Group >
                        <ColorInput title="Tertiary" startingColor={selectedPalette.tertiary} setColor={(color:string)=>{
                                setLocalPalette({...localPalette, tertiary:parseColorInput(color)})
                            }}/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group >
                        <ColorInput title="Quaternary" startingColor={selectedPalette.quaternary} setColor={(color:string)=>{
                                setLocalPalette({...localPalette, quaternary:parseColorInput(color)})
                            }}/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group >
                        <ColorInput title="Background" startingColor={selectedPalette.background} setColor={(color:string)=>{
                                setLocalPalette({...localPalette, background:parseColorInput(color)})
                            }}/>
                    </Form.Group>
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer style={{ borderWidth:0 }}>
            <Button variant="primary" onClick={handleGlobalColorChange}>
                Save Changes
            </Button>
            </Modal.Footer>
            </div>
        </Modal>
        </>
    )
};
export { Settings }