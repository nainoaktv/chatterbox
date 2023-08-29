import { ViewIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Button, IconButton } from "@chakra-ui/button";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={"40px"}
            fontFamily={"Montserrat"}
            display={"flex"}
            justifyContent={"center"}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              borderRadius={"full"}
              boxSize={"150px"}
              src={user.pic}
              alt={user.name}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
