import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserSection from 'common/components/layout/navbar/UserSection';
import MessagesMainArea from 'messages-page/components/MessagesMainArea';
import moreIcon from 'images/icons/more.svg';

const MessageBoxAreaWrapper = styled.div.attrs({ className: 'message-box-area' })`
  height: 100%;
  overflow: hidden;
`;

const ProfileMoreIcon = styled.img.attrs({
  className: 'profile-more-icon',
  alt: 'profile-more-icon',
})`
  width: 14px;
  height: 14px;
  cursor: pointer;
  display: inline-block;
  margin-top: 15px;
  float: right;
`;

const MessageTopBar = styled.div.attrs({ className: 'message-top-bar' })`
  padding: 12px 22px;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;
  position: relative;
  min-height: 40px;
`;

const TopBarLeftSide = styled.div.attrs({ className: 'top-bar-left-side' })`
  display: inline-block;
`;

const UserActiveDot = styled.div.attrs({ className: 'user-active-dot' })`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  bottom: 4px;
  background: #5bc247;
  margin-left: 10px;
  border: 2px solid #ffffff;
  right: -4px;
  display: inline-block;
`;

const MessageBoxArea = ({ currentPerson, addNewUser }) => (
  <MessageBoxAreaWrapper>
    <MessageTopBar>
      <TopBarLeftSide>
        {currentPerson && (
          <>
            <UserSection
              firstName={currentPerson.firstName}
              lastName={currentPerson.lastName}
              bottomText="Patient"
              showIcon={false}
            />
            <UserActiveDot />
          </>
        )}
      </TopBarLeftSide>

      {currentPerson && <ProfileMoreIcon src={moreIcon} />}
    </MessageTopBar>

    <MessagesMainArea addNewUser={addNewUser} />
  </MessageBoxAreaWrapper>
);

MessageBoxArea.propTypes = {
  currentPerson: PropTypes.instanceOf(Object).isRequired,
  addNewUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPerson: state.messages.usersList.currentPerson,
});

export default connect(mapStateToProps, null)(MessageBoxArea);
