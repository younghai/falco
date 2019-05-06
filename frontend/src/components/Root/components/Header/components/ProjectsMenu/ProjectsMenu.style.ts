import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorUsage, fontFamily, fontSize, fontWeight, getSpacing, lineHeight } from 'stylesheet';

interface ItemWithMarginProps {
  margin?: string;
}

interface ProjectsMenuContainerProps {
  position?: string;
  right?: string | null;
}

const StyledProjectsMenu = {
  Container: styled.div`
    width: 460px;
    background-color: ${colorUsage.projectsMenuBackground};
    box-shadow: 0 0 8px 4px ${colorUsage.projectsMenuShadow};
    position: ${(props: ProjectsMenuContainerProps) => (props.position ? props.position : 'static')};
    right: ${(props: ProjectsMenuContainerProps) => (props.right ? props.right : 'auto')};
  `,
  LoaderContainer: styled.div`
    width: 100%;
    min-height: 200px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
  `,

  Error: styled.div`
    padding: ${getSpacing(3)};
    color: ${colorUsage.popinErrorText};
    background-color: ${colorUsage.popinErrorBackground};
    border-radius: ${getSpacing(1)};
    margin: ${getSpacing(8)};
    white-space: pre-wrap;
  `,

  ProjectItem: styled(Link)`
    display: flex;
    padding: ${getSpacing(3)} ${getSpacing(8)};
    text-decoration: none;
    color: ${colorUsage.projectsMenuItemText};
    background-color: ${colorUsage.projectsMenuItemBackground};
    font-family: ${fontFamily.mainSans};
    border-top: 1px solid ${colorUsage.projectsMenuItemBorder};

    &:hover {
      color: ${colorUsage.projectsMenuItemHoverText};
    }
  `,
  ProjectItemSnapshotContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ProjectItemSnapshot: styled.img`
    width: 75px;
    height: 50px;
    margin: ${(props: ItemWithMarginProps) => (props.margin ? props.margin : '0')};
    border: 1px solid ${colorUsage.projectsMenuItemSnapshotBorder};
  `,
  ProjectItemTitleBlock: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ProjectItemTitle: styled.div`
    font-size: ${fontSize.h4Text};
    font-weight: ${fontWeight.h4Text};
    line-height: ${lineHeight.h4Text};
  `,
  ProjectItemLastAudit: styled.div`
    font-size: ${fontSize.bodyText};
    line-height: ${lineHeight.bodyText};
  `,

  CurrentProjectItem: styled.div`
    display: flex;
    padding: ${getSpacing(4)} ${getSpacing(8)};
    color: ${colorUsage.projectsMenuItemText};
    font-family: ${fontFamily.mainSans};
  `,
  CurrentProjectItemSnapshot: styled.img`
    width: 150px;
    height: 100px;
    margin: ${(props: ItemWithMarginProps) => (props.margin ? props.margin : '0')};
    border: 1px solid ${colorUsage.projectsMenuItemSnapshotBorder};
  `,
  CurrentProjectItemTitleBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CurrentProjectItemTitleContainer: styled.div`
    display: flex;
    align-items: center;
    margin: ${(props: ItemWithMarginProps) => (props.margin ? props.margin : '0')};
  `,
  CurrentProjectItemStarContainer: styled.div`
    height: 25px;
    width: 25px;
    margin: ${(props: ItemWithMarginProps) => (props.margin ? props.margin : '0')};
  `,
  CurrentProjectItemTitle: styled.div`
    font-size: ${fontSize.h3Text};
    font-weight: ${fontWeight.h3Text};
    line-height: ${lineHeight.h3Text};
  `,
};

export default StyledProjectsMenu;