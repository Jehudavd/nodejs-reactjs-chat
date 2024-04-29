import {
    PrettyChatWindow
} from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh " }}>
        <PrettyChatWindow
            projectId='4d26d271-6a62-4e1b-97d0-07e73166b0c4'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
  );
};

export default ChatsPage;
