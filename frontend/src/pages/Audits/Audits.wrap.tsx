import { connect } from 'react-redux';
import {
  selectAuditScriptSteps,
  selectPageAuditResultsIds,
  selectScriptAuditResultsIds,
} from 'redux/auditResults/selectors';
import { fetchProjectsRequest } from 'redux/entities/projects';
import { getProject } from 'redux/entities/projects/selectors';
import {
  setCurrentAuditParametersId,
  setCurrentPageId,
  setCurrentScriptId,
  setCurrentScriptStepId,
} from 'redux/parameters';
import { RootState } from 'redux/types';

import { injectIntl } from 'react-intl';
import { Dispatch } from 'redux';
import { fetchAuditResultsRequest } from 'redux/auditResults';
import { getAuditParameters } from 'redux/entities/auditParameters/selectors';
import { getPage, getPageLatestAuditStatusHistory } from 'redux/entities/pages/selectors';
import { getScript, getScriptLatestAuditStatusHistory } from 'redux/entities/scripts/selectors';
import { Audits, OwnProps } from './Audits';

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  project: getProject(state, props.match.params.projectId),
  page: getPage(state, props.match.params.pageOrScriptId),
  script: getScript(state, props.match.params.pageOrScriptId),
  currentAuditParameters: getAuditParameters(state, props.match.params.auditParametersId),
  sortedPageAuditResultsIds: selectPageAuditResultsIds(
    state,
    props.match.params.auditParametersId,
    props.match.params.pageOrScriptId,
  ),
  sortedScriptAuditResultsIds: selectScriptAuditResultsIds(
    state,
    props.match.params.auditParametersId,
    props.match.params.pageOrScriptId,
  ),
  pageAuditStatusHistory: getPageLatestAuditStatusHistory(state, props.match.params.pageOrScriptId),
  scriptAuditStatusHistory: getScriptLatestAuditStatusHistory(state, props.match.params.pageOrScriptId),
  scriptSteps: selectAuditScriptSteps(
    state,
    props.match.params.auditParametersId,
    props.match.params.pageOrScriptId,
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAuditResultsRequest: (
    auditParametersId: string,
    pageOrScriptId: string,
    type: 'page' | 'script',
    fromDate?: Date,
    toDate?: Date
  ) => dispatch(fetchAuditResultsRequest({ auditParametersId, pageOrScriptId, type, fromDate, toDate })),
  fetchProjectsRequest: (projectId: string) => dispatch(fetchProjectsRequest({ currentProjectId: projectId })),
  setCurrentAuditParametersId: (auditParametersId: string | null | undefined) =>
    dispatch(setCurrentAuditParametersId({ auditParametersId })),
  setCurrentPageId: (pageId: string | null | undefined) => dispatch(setCurrentPageId({ pageId })),
  setCurrentScriptId: (scriptId: string | null | undefined) =>
    dispatch(setCurrentScriptId({ scriptId })),
  setCurrentScriptStepId: (scriptStepId: string | null | undefined) =>
    dispatch(setCurrentScriptStepId({ scriptStepId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Audits));
