import {Card, Upload, message} from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss"
import {InboxOutlined} from "@ant-design/icons";




const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    }
}

const CheckRejectPerc = () => {
    return (
        <Card
            className="check-reject-perc"
            cover={
                <Upload {...props}>
                    <InboxOutlined className="upload-icon"/>
                </Upload>
            }
        >
            <Meta title="Проверить процент брака вручную" description="Загрузите фотографию сырья с устройства" />
        </Card>
    )
}

const Tools = () => {
    return (
        <div className="tools">
        <CheckRejectPerc />
        </div>
    )
}

export default Tools