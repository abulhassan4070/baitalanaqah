// eslint-disable-next-line no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Box,
  MenuList,
  MenuItem,
  Checkbox,
  Menu,
  MenuButton,
  Button,
  Icon,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  ConversationList,
  Conversation,
  ConversationHeader,
  Avatar,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import React from "react";

import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import { IoCloseCircle, IoReload } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
export default function AllGrievance() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState(null);
  const admin = React.useContext(AdminContext);
  const [category, setCategory] = React.useState("All");
  const [messageInputValue, setMessageInputValue] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [type, setType] = React.useState("open");
  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [value, setValue] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);
  const history = useHistory();
  const fetchData = async () => {
    console.log(value);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getGrievancesDetails&username=${
        admin.user.username
      }&token=${admin.user.token}&status=${
        type === "open" ? 0 : 1
      }&category=${category}&from_date=${value[0]}&to_date=${
        value[1]
      }&search=${search}`
    );
    setData(response.data.data);
  };

  const getMessages = async (ticket_id) => {
    axios
      .get(
        `${apiUrl()}?action=dashboard&mode=getGrivancesMessage&username=${
          admin.user.username
        }&token=${admin.user.token}&tickpoid=${ticket_id}`
      )
      .then((res) => {
        setMessages(res.data.data);
      });
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, value, category, search]);

  const onclickable = async (string) => {
    setSearch(string);
  };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex>
        <SearchBar
          id="userSearch"
          onclickable={onclickable}
          background={"white"}
        />
        <DatePicker
          zIndex={1000}
          value={value}
          onChange={(e) => {
            if (e.length === 2) {
              var date1 = dayjs(e[0]).format("YYYY-MM-DD");
              var date2 = dayjs(e[1]).format("YYYY-MM-DD");
              setValue([date1, date2]);
            } else {
              setValue([dayjs(e[0]).format("YYYY-MM-DD")]);
            }
          }}
          range
          style={{
            width: "100%",
            height: "40px",
            border: "1px solid #e2e8f0",
            borderRadius: "5px",
            padding: "0px 10px",
            marginRight: "10px",
            fontSize: "14px",
            color: "#718096",
            outline: "none",
          }}
        />
        <Menu>
          <MenuButton p="0px">
            <Button
              colorScheme="gray"
              variant="outline"
              style={{
                marginRight: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Type
            </Button>
          </MenuButton>
          <MenuList
            p="0px"
            mt="10px"
            borderRadius="20px"
            border="none"
            zIndex={10}
            boxShadow="0px 0px 10px 0px rgba(0,0,0,0.1)"
          >
            {[
              "All",
              "Financial",
              "Technical",
              "General",
              "Product",
              "Order",
              "Wallet",
              "Others",
            ].map((item, index) => {
              return (
                <MenuItem>
                  <Checkbox
                    isChecked={category === item}
                    onChange={(e) => {
                      setCategory(item);
                    }}
                  >
                    {item}
                  </Checkbox>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>
      <MainContainer responsive>
        <Sidebar
          position="left"
          scrollable={true}
          style={{
            height: "650px",
          }}
        >
          <Flex
            style={{
              height: "50px",
              width: "100%",
              backgroundColor: "#f7fafc",

              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Container
              style={{
                width: "50%",
                padding: "10px",
                background: type === "open" ? "black" : "white",
                textAlign: "center",
              }}
              onClick={() => {
                setType("open");
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: type === "open" ? "white" : "black",
                }}
              >
                OPEN
              </Text>
            </Container>
            <Container
              style={{
                width: "50%",
                padding: "10px",
                background: type === "close" ? "black" : "white",
                textAlign: "center",
              }}
              onClick={() => {
                setType("close");
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: type === "close" ? "white" : "black",
                  marginLeft: "10px",
                }}
              >
                CLOSE
              </Text>
            </Container>
          </Flex>
          <ConversationList>
            {data.map((item) => {
              return (
                <Conversation
                  name={item.reciver_name}
                  info={"#" + item.tasktype}
                  onClick={() => {
                    setCurrentUser(item);
                    getMessages(item.ticket_no);
                  }}
                >
                  <Avatar
                    src={
                      item.reciver_image === ""
                        ? "https://api.mahabhojanam.com/cdn/profile/avatar.png"
                        : item.reciver_image
                    }
                    name={item.reciver_name}
                  />
                </Conversation>
              );
            })}
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          {currentUser && (
            <ConversationHeader>
              <Avatar
                src={
                  currentUser.reciver_image === ""
                    ? "https://api.mahabhojanam.com/cdn/profile/avatar.png"
                    : currentUser.reciver_image
                }
                name={currentUser.reciver_name}
              />
              <ConversationHeader.Content
                onClick={() => {
                  history.push(
                    `/admin/userreports/singleuser?id=${currentUser.user_id}`
                  );
                }}
                userName={currentUser.reciver_name + " #" + currentUser.user_id}
                info={currentUser.tasktype}
                about={currentUser.user_id}
              />
              <ConversationHeader.Actions>
                {currentUser.status.toString() === "0" ? (
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    style={{
                      marginRight: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                    onClick={async () => {
                      await axios.get(
                        `${apiUrl()}?action=dashboard&mode=closeGrivancesMessage&username=${
                          admin.user.username
                        }&token=${admin.user.token}&tickpoid=${
                          currentUser.ticket_no
                        }`
                      );
                      currentUser.status = 1;
                      setCurrentUser(currentUser);
                      setType("close");
                    }}
                  >
                    <Icon
                      as={IoCloseCircle}
                      width="20px"
                      height="20px"
                      color="inherit"
                    />
                  </Button>
                ) : (
                  <></>
                )}
                <Button
                  colorScheme="blue"
                  variant="outline"
                  style={{
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  onClick={() => {
                    getMessages(currentUser.ticket_no);
                  }}
                >
                  <Icon
                    as={IoReload}
                    width="20px"
                    height="20px"
                    color="inherit"
                  />
                  ,
                </Button>
              </ConversationHeader.Actions>
            </ConversationHeader>
          )}
          <MessageList
            style={{
              height: "600px",
            }}
          >
            {messages.length !== 0 && (
              <>
                <MessageSeparator content={"subject: " + currentUser.subject} />
                {messages.map((item) => {
                  return (
                    <Message
                      model={{
                        message:
                          item.description === ""
                            ? item.response
                            : item.description,
                        direction:
                          item.description === "" ? "outgoing" : "incoming",
                      }}
                    ></Message>
                  );
                })}
              </>
            )}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => {
              axios
                .get(
                  `${apiUrl()}?action=dashboard&mode=setGrivancesMessage&username=${
                    admin.user.username
                  }&token=${admin.user.token}&tickpoid=${
                    currentUser.ticket_no
                  }&response=${messageInputValue.replace(/<[^>]+>/g, "")}`
                )
                .then((res) => {
                  setMessageInputValue("");
                  getMessages(currentUser.ticket_no);
                });
              setMessageInputValue("");
              getMessages(currentUser.ticket_no);
            }}
            attachButton={false}
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </Box>
  );
}
