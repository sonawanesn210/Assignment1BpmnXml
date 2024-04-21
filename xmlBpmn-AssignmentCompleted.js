const xml2js = require('xml2js');
const builder = new xml2js.Builder();
const fs = require('fs');

const xmlString = {"xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bpmn:definitions xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" id=\"definitions\" targetNamespace=\"http://bpmn.io/schema/bpmn\"><bpmn:process id=\"MyProcess\"><bpmn:task id=\"SiteCodeCreation\" /><bpmn:task id=\"UpdateSiteDetails\" /><bpmn:task id=\"LegalAgreement\" /><bpmn:task id=\"JointMeeting\" /><bpmn:task id=\"SecurityDeposite\" /><bpmn:task id=\"LLScopeOfWorkTiling\" /><bpmn:task id=\"LLScopeOfWorkWashroom\" /><bpmn:task id=\"LLScopeOfWorkShutter\" /><bpmn:task id=\"LLScopeOfWorkPOP\" /><bpmn:task id=\"LLScopeOfWorkPainting\" /><bpmn:task id=\"LLScopeOfWorkGlazing\" /><bpmn:task id=\"LLScopeOfWorkPower\" /><bpmn:task id=\"LLScopeOfWorkExternalDevelopment\" /><bpmn:task id=\"HandoverToProjects\" /><bpmn:task id=\"Approval_HandoverFromRealEstate\" /><bpmn:task id=\"ProjectKickOfMeeting\" /><bpmn:task id=\"MaterialAndManpowerMovement\" /><bpmn:task id=\"ProjectsScopeOfWorkCivil\" /><bpmn:task id=\"ProjectsScopeOfWork_Electrical\" /><bpmn:task id=\"ProjectsScopeOfWork_HVAC\" /><bpmn:task id=\"ProjectsScopeOfWork_FixturingAndITReadiness\" /><bpmn:task id=\"FixtureInstallation\" /><bpmn:sequenceFlow id=\"flow1\" sourceRef=\"SiteCodeCreation\" targetRef=\"UpdateSiteDetails\" /><bpmn:sequenceFlow id=\"flow2\" sourceRef=\"SiteCodeCreation\" targetRef=\"LegalAgreement\" /><bpmn:sequenceFlow id=\"flow3\" sourceRef=\"SiteCodeCreation\" targetRef=\"JointMeeting\" /><bpmn:sequenceFlow id=\"flow4\" sourceRef=\"SiteCodeCreation\" targetRef=\"SecurityDeposite\" /><bpmn:sequenceFlow id=\"flow5\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkTiling\" /><bpmn:sequenceFlow id=\"flow6\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkWashroom\" /><bpmn:sequenceFlow id=\"flow7\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkShutter\" /><bpmn:sequenceFlow id=\"flow8\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPOP\" /><bpmn:sequenceFlow id=\"flow9\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPainting\" /><bpmn:sequenceFlow id=\"flow10\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkGlazing\" /><bpmn:sequenceFlow id=\"flow11\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPower\" /><bpmn:sequenceFlow id=\"flow12\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkExternalDevelopment\" /><bpmn:sequenceFlow id=\"flow13\" sourceRef=\"HandoverToProjects\" targetRef=\"Approval_HandoverFromRealEstate\" /><bpmn:sequenceFlow id=\"flow14\" sourceRef=\"ProjectKickOfMeeting\" targetRef=\"MaterialAndManpowerMovement\" /><bpmn:sequenceFlow id=\"flow15\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWorkCivil\" /><bpmn:sequenceFlow id=\"flow16\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_Electrical\" /><bpmn:sequenceFlow id=\"flow17\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_Electrical\" /><bpmn:sequenceFlow id=\"flow18\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_HVAC\" /><bpmn:sequenceFlow id=\"flow19\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" /><bpmn:sequenceFlow id=\"flow20\" sourceRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" targetRef=\"FixtureInstallation\" /><bpmn:sequenceFlow id=\"flow21\" sourceRef=\"FixtureInstallation\" targetRef=\"Installation\" /><bpmn:sequenceFlow id=\"flow22\" sourceRef=\"Power\" targetRef=\"TestingAndCommissioning\" /><bpmn:sequenceFlow id=\"flow23\" sourceRef=\"Installation\" targetRef=\"HandOverToNSO\" /><bpmn:sequenceFlow id=\"flow24\" sourceRef=\"HandoverFromProjects\" targetRef=\"SiteMeasurement_Projects\" /><bpmn:sequenceFlow id=\"flow25\" sourceRef=\"SiteMeasurement_Projects\" targetRef=\"GoodsReceiptNote_SAP\" /><bpmn:sequenceFlow id=\"flow26\" sourceRef=\"GoodsReceiptNote_SAP\" targetRef=\"BillSubmission_Projects\" /><bpmn:sequenceFlow id=\"flow27\" sourceRef=\"SiteCodeCreation\" targetRef=\"ApplyForBroadband\" /><bpmn:sequenceFlow id=\"flow28\" sourceRef=\"HandOverToNSO\" targetRef=\"Approval_HandoverFromProjects\" /><bpmn:sequenceFlow id=\"flow29\" sourceRef=\"HandoverFromProjects\" targetRef=\"PestControl\" /><bpmn:sequenceFlow id=\"flow28\" sourceRef=\"Approval_HandoverFromRealEstate\" targetRef=\"AppointHousekeepingAndSecurityAgency\" /><bpmn:sequenceFlow id=\"flow31\" sourceRef=\"ITReadiness\" targetRef=\"ITChecklist\" /><bpmn:sequenceFlow id=\"flow32\" sourceRef=\"ITReadiness\" targetRef=\"PlutusInstallation\" /><bpmn:sequenceFlow id=\"flow33\" sourceRef=\"HandoverFromProjects\" targetRef=\"CashPickAgency\" /><bpmn:sequenceFlow id=\"flow34\" sourceRef=\"StocksDispatched\" targetRef=\"Stocking\" /><bpmn:sequenceFlow id=\"flow35\" sourceRef=\"Stocking\" targetRef=\"PerishableItemsDeliveryConfirmation\" /><bpmn:sequenceFlow id=\"flow36\" sourceRef=\"ITReadiness\" targetRef=\"TestScan_POS\" /><bpmn:sequenceFlow id=\"flow36\" sourceRef=\"ITReadiness\" targetRef=\"TestScan_POS\" /><bpmn:sequenceFlow id=\"flow37\" sourceRef=\"PerishableItemsDeliveryConfirmation\" targetRef=\"PerishableMerchandise_RecceivedAndDisplayed\" /><bpmn:sequenceFlow id=\"flow38\" sourceRef=\"Stocking\" targetRef=\"MerchandiseInstock95Plus\" /><bpmn:sequenceFlow id=\"flow39\" sourceRef=\"MerchandiseInstock95Plus\" targetRef=\"CheckBackupPlanforextrastocks\" /><bpmn:sequenceFlow id=\"flow40\" sourceRef=\"HandoverFromProjects\" targetRef=\"GatepassesInwardRegistersAndOtherDocuments\" /><bpmn:sequenceFlow id=\"flow41\" sourceRef=\"Stocking\" targetRef=\"SelsDisplayAndSignages\" /><bpmn:sequenceFlow id=\"flow42\" sourceRef=\"HandoverFromProjects\" targetRef=\"Licenses\" /><bpmn:sequenceFlow id=\"flow43\" sourceRef=\"CheckBackupPlanforextrastocks\" targetRef=\"HandoverToOperations\" /><bpmn:sequenceFlow id=\"flow44\" sourceRef=\"ITChecklist\" targetRef=\"InstallInStoreRadioAndDisplayPPL\" /><bpmn:sequenceFlow id=\"flow45\" sourceRef=\"ApplyForBroadband\" targetRef=\"BroadbandAvailable\" /><bpmn:sequenceFlow id=\"flow46\" sourceRef=\"ProjectKickOfMeeting\" targetRef=\"SiteSurvey\" /><bpmn:sequenceFlow id=\"flow47\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"LinkFeasibility\" /><bpmn:sequenceFlow id=\"flow48\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"BOQSubmission_IT\" /><bpmn:sequenceFlow id=\"flow49\" sourceRef=\"BOQSubmission_IT\" targetRef=\"STOPOAgainstBOQ\" /><bpmn:sequenceFlow id=\"flow50\" sourceRef=\"STOPOAgainstBOQ\" targetRef=\"MovementOfMaterialAgainstSTO\" /><bpmn:sequenceFlow id=\"flow51\" sourceRef=\"LinkFeasibility\" targetRef=\"LinkAvailability\" /><bpmn:sequenceFlow id=\"flow52\" sourceRef=\"JointMeeting\" targetRef=\"ConfirmLLScopeofWork\" /><bpmn:sequenceFlow id=\"flow53\" sourceRef=\"ConfirmLLScopeofWork\" targetRef=\"PrepareSiteSpecificCapEX\" /><bpmn:sequenceFlow id=\"flow54\" sourceRef=\"PrepareSiteSpecificCapEX\" targetRef=\"ApprovalCapex\" /><bpmn:sequenceFlow id=\"flow55\" sourceRef=\"SiteCodeCreation\" targetRef=\"ZonalAndHOLayoutSignOff\" /><bpmn:sequenceFlow id=\"flow56\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"LayoutsForFixtureBOQs\" /><bpmn:sequenceFlow id=\"flow57\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"LayoutsForGFCDrawingsAndBOQ\" /><bpmn:sequenceFlow id=\"flow58\" sourceRef=\"LayoutsForGFCDrawingsAndBOQ\" targetRef=\"HOLayoutReview\" /><bpmn:sequenceFlow id=\"flow59\" sourceRef=\"ITChecklist\" targetRef=\"InstallInStoreRadioAndDisplayPPL\" /><bpmn:sequenceFlow id=\"flow60\" sourceRef=\"SiteCodeCreation\" targetRef=\"CatchmentStudyMarketingPlan\" /><bpmn:sequenceFlow id=\"flow61\" sourceRef=\"CatchmentStudyMarketingPlan\" targetRef=\"Approval_CatchmentStudyAndMarketiingPlan\" /><bpmn:sequenceFlow id=\"flow62\" sourceRef=\"SiteCodeCreation\" targetRef=\"OnlineMarketingPlan\" /><bpmn:sequenceFlow id=\"flow63\" sourceRef=\"OnlineMarketingPlan\" targetRef=\"Approval_OnlineMarkrtingPlan\" /><bpmn:sequenceFlow id=\"flow64\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"SignageOpeningSoon\" /><bpmn:sequenceFlow id=\"flow65\" sourceRef=\"Approval_OnlineMarkrtingPlan\" targetRef=\"StoreAddressUpdate\" /><bpmn:sequenceFlow id=\"flow66\" sourceRef=\"Approval_CatchmentStudyAndMarketiingPlan\" targetRef=\"MarketingPO\" /><bpmn:sequenceFlow id=\"flow67\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"MarketingCollaterals\" /><bpmn:sequenceFlow id=\"flow67\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"MarketingCollaterals\" /><bpmn:sequenceFlow id=\"flow68\" sourceRef=\"SiteCodeCreation\" targetRef=\"OnlineMarketingPlan\" /><bpmn:sequenceFlow id=\"flow69\" sourceRef=\"BrandAwarenessCampaign\" targetRef=\"OnlineBrandAwarenessAndLeadGeneration\" /><bpmn:sequenceFlow id=\"flow70\" sourceRef=\"HandoverFromProjects\" targetRef=\"CatchmentEngagement_CampaignSupportAndStoreLaunchActivities\" /><bpmn:sequenceFlow id=\"flow71\" sourceRef=\"SiteCodeCreation\" targetRef=\"StoreCodeRegistrationOnOneLoyalty\" /><bpmn:sequenceFlow id=\"flow72\" sourceRef=\"MarketingCollaterals\" targetRef=\"PreOpeningChecklist\" /><bpmn:sequenceFlow id=\"flow73\" sourceRef=\"OJTAndFeedback_CSA\" targetRef=\"ClassroomTraining_Membership\" /><bpmn:sequenceFlow id=\"flow74\" sourceRef=\"MembershipDriveAssignResourcesAndTargets\" targetRef=\"DTO_EnrolmentRegistration\" /><bpmn:sequenceFlow id=\"flow75\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"AllocateVendorAndReleaseDesignPo\" /><bpmn:sequenceFlow id=\"flow76\" sourceRef=\"AllocateVendorAndReleaseDesignPo\" targetRef=\"SiteSurveyVMEstimate\" /><bpmn:sequenceFlow id=\"flow77\" sourceRef=\"SiteSurveyVMEstimate\" targetRef=\"VMDocketPrep_ZonalVM\" /><bpmn:sequenceFlow id=\"flow78\" sourceRef=\"UpdateSiteDetails\" targetRef=\"EscalatedBudgetApproval\" /><bpmn:sequenceFlow id=\"flow79\" sourceRef=\"VMDocketPrep_ZonalVM\" targetRef=\"Approval_VMDesignDocketHO\" /><bpmn:sequenceFlow id=\"flow80\" sourceRef=\"Approval_VMDesignDocketHO\" targetRef=\"VM_DocketAndPOReleased\" /><bpmn:sequenceFlow id=\"flow81\" sourceRef=\"VM_DocketAndPOReleased\" targetRef=\"BOQAndPOProcess\" /><bpmn:sequenceFlow id=\"flow82\" sourceRef=\"LayoutsForFixtureBOQs\" targetRef=\"BulkOrderVMArticleSupply\" /><bpmn:sequenceFlow id=\"flow83\" sourceRef=\"BOQAndPOProcess\" targetRef=\"MaterialDeliveryAndFacadeInstallation\" /><bpmn:sequenceFlow id=\"flow84\" sourceRef=\"FixtureInstallation\" targetRef=\"Installation_InstoreBranding\" /><bpmn:sequenceFlow id=\"flow85\" sourceRef=\"SiteMeasurement_Projects\" targetRef=\"MeasurementGNRAndBillSubmissionVM\" /><bpmn:sequenceFlow id=\"flow86\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"CatchmentStudyRegionalBrands\" /><bpmn:sequenceFlow id=\"flow87\" sourceRef=\"CatchmentStudyRegionalBrands\" targetRef=\"FinalizeListingAndMappingOfAssortment\" /><bpmn:sequenceFlow id=\"flow88\" sourceRef=\"FinalizeListingAndMappingOfAssortment\" targetRef=\"BusinessHeadsApprovalOfStoreAssortment\" /><bpmn:sequenceFlow id=\"flow89\" sourceRef=\"BusinessHeadsApprovalOfStoreAssortment\" targetRef=\"ProvideFinalisedAssortmentToSupplyChain\" /><bpmn:sequenceFlow id=\"flow90\" sourceRef=\"BusinessHeadsApprovalOfStoreAssortment\" targetRef=\"PrepareModularMPMPlanInJDA\" /><bpmn:sequenceFlow id=\"flow91\" sourceRef=\"PrepareModularMPMPlanInJDA\" targetRef=\"ExecutionofModularMPMPlaninStore\" /><bpmn:sequenceFlow id=\"flow92\" sourceRef=\"FinalizeListingAndMappingOfAssortment\" targetRef=\"MBQUpdate\" /><bpmn:sequenceFlow id=\"flow93\" sourceRef=\"MBQUpdate\" targetRef=\"StockReadiness\" /><bpmn:sequenceFlow id=\"flow94\" sourceRef=\"Installation\" targetRef=\"StoreOpeningDateAnnouncement\" /><bpmn:sequenceFlow id=\"flow95\" sourceRef=\"StoreOpeningDateAnnouncement\" targetRef=\"StocksDispatched\" /><bpmn:sequenceFlow id=\"flow96\" sourceRef=\"StoreOpeningDateAnnouncement\" targetRef=\"DirectOrderingStore\" /><bpmn:sequenceFlow id=\"flow97\" sourceRef=\"InitiateHiringProcess_CSA\" targetRef=\"SourcingAndScreeningCVs_CSA\" /><bpmn:sequenceFlow id=\"flow98\" sourceRef=\"InitiateHiringProcess_SK\" targetRef=\"SourcingAndScreeningCVs_SK\" /><bpmn:sequenceFlow id=\"flow99\" sourceRef=\"SourcingAndScreeningCVs_CSA\" targetRef=\"InterviewAndFinalizeCandidates_CSA\" /><bpmn:sequenceFlow id=\"flow100\" sourceRef=\"SourcingAndScreeningCVs_SK\" targetRef=\"InterviewAndFinalizeCandidates_SK\" /><bpmn:sequenceFlow id=\"flow101\" sourceRef=\"InterviewAndFinalizeCandidates_CSA\" targetRef=\"IssueOfferLetter_CSA\" /><bpmn:sequenceFlow id=\"flow102\" sourceRef=\"InterviewAndFinalizeCandidates_SK\" targetRef=\"IssueOfferLetter_SK\" /><bpmn:sequenceFlow id=\"flow103\" sourceRef=\"IssueOfferLetter_CSA\" targetRef=\"Onboarding_CSA\" /><bpmn:sequenceFlow id=\"flow104\" sourceRef=\"IssueOfferLetter_SK\" targetRef=\"Onboarding_SK\" /><bpmn:sequenceFlow id=\"flow105\" sourceRef=\"CRTAndOJT_PlanDateTrainerAndVenue_CSA\" targetRef=\"CRTAndOJTCommunicateTrainingVenueToAPO_CSA\" /><bpmn:sequenceFlow id=\"flow106\" sourceRef=\"CRTAndOJT_PlanDateTrainerAndVenue_SK\" targetRef=\"CRTAndOJTCommunicateTrainingVenueToAPO_SK\" /><bpmn:sequenceFlow id=\"flow107\" sourceRef=\"Onboarding_CSA\" targetRef=\"OnboardingAcceptance_CSA\" /><bpmn:sequenceFlow id=\"flow108\" sourceRef=\"Onboarding_SK\" targetRef=\"OnboardingAcceptance_SK\" /><bpmn:sequenceFlow id=\"flow109\" sourceRef=\"OnboardingAcceptance_CSA\" targetRef=\"Induction_CRTDay1_CSA\" /><bpmn:sequenceFlow id=\"flow110\" sourceRef=\"Induction_CRTDay1_CSA\" targetRef=\"Induction_CRTDay2_CSA\" /><bpmn:sequenceFlow id=\"flow111\" sourceRef=\"Induction_CRTDay2_CSA\" targetRef=\"Induction_CRTDay3_CSA\" /><bpmn:sequenceFlow id=\"flow112\" sourceRef=\"OnboardingAcceptance_SK\" targetRef=\"Induction_CRTDay1_SK\" /><bpmn:sequenceFlow id=\"flow113\" sourceRef=\"Induction_CRTDay1_SK\" targetRef=\"Induction_CRTDay2_SK\" /><bpmn:sequenceFlow id=\"flow114\" sourceRef=\"Induction_CRTDay2_SK\" targetRef=\"Induction_CRTDay3_SK\" /><bpmn:sequenceFlow id=\"flow115\" sourceRef=\"Induction_CRTDay3_CSA\" targetRef=\"OJTAndFeedback_CSA\" /><bpmn:sequenceFlow id=\"flow116\" sourceRef=\"Induction_CRTDay3_SK\" targetRef=\"OJTAndFeedback_SK\" /><bpmn:sequenceFlow id=\"flow117\" sourceRef=\"OJTAndFeedback_CSA\" targetRef=\"CSAMembershipDrive\" /><bpmn:sequenceFlow id=\"flow118\" sourceRef=\"OJTAndFeedback_SK\" targetRef=\"SKMembershipDrive\" /><bpmn:sequenceFlow id=\"flow119\" sourceRef=\"CSAMembershipDrive\" targetRef=\"CSAAssessmentAndHandover\" /><bpmn:sequenceFlow id=\"flow120\" sourceRef=\"SKMembershipDrive\" targetRef=\"SKAssessmentAndHandover\" /><bpmn:sequenceFlow id=\"flow121\" sourceRef=\"UpdateSiteDetails\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow122\" sourceRef=\"LegalAgreement\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow123\" sourceRef=\"JointMeeting\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow124\" sourceRef=\"SecurityDeposite\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow125\" sourceRef=\"ApplyForBroadband\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow126\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow127\" sourceRef=\"CatchmentStudyMarketingPlan\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow128\" sourceRef=\"OnlineMarketingPlan\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow129\" sourceRef=\"StoreCodeRegistrationOnOneLoyalty\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow130\" sourceRef=\"LLScopeOfWorkTiling\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow131\" sourceRef=\"LLScopeOfWorkWashroom\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow132\" sourceRef=\"LLScopeOfWorkShutter\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow133\" sourceRef=\"LLScopeOfWorkPOP\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow134\" sourceRef=\"LLScopeOfWorkPainting\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow135\" sourceRef=\"LLScopeOfWorkGlazing\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow136\" sourceRef=\"LLScopeOfWorkPower\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow137\" sourceRef=\"LLScopeOfWorkExternalDevelopment\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow138\" sourceRef=\"ConfirmLLScopeofWork\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow139\" sourceRef=\"ProjectsScopeOfWorkCivil\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow140\" sourceRef=\"ProjectsScopeOfWork_Electrical\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow141\" sourceRef=\"ProjectsScopeOfWork_HVAC\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow142\" sourceRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow143\" sourceRef=\"LLScopeOfWorkExternalDevelopment\" targetRef=\"parallelGateway3\" /><bpmn:task id=\"SiteCodeCreation\" /><bpmn:task id=\"UpdateSiteDetails\" /><bpmn:task id=\"LegalAgreement\" /><bpmn:task id=\"JointMeeting\" /><bpmn:task id=\"SecurityDeposite\" /><bpmn:task id=\"LLScopeOfWorkTiling\" /><bpmn:task id=\"LLScopeOfWorkWashroom\" /><bpmn:task id=\"LLScopeOfWorkShutter\" /><bpmn:task id=\"LLScopeOfWorkPOP\" /><bpmn:task id=\"LLScopeOfWorkPainting\" /><bpmn:task id=\"LLScopeOfWorkGlazing\" /><bpmn:task id=\"LLScopeOfWorkPower\" /><bpmn:task id=\"LLScopeOfWorkExternalDevelopment\" /><bpmn:task id=\"HandoverToProjects\" /><bpmn:task id=\"Approval_HandoverFromRealEstate\" /><bpmn:task id=\"ProjectKickOfMeeting\" /><bpmn:task id=\"MaterialAndManpowerMovement\" /><bpmn:task id=\"ProjectsScopeOfWorkCivil\" /><bpmn:task id=\"ProjectsScopeOfWork_Electrical\" /><bpmn:task id=\"ProjectsScopeOfWork_HVAC\" /><bpmn:task id=\"ProjectsScopeOfWork_FixturingAndITReadiness\" /><bpmn:task id=\"FixtureInstallation\" /><bpmn:sequenceFlow id=\"flow1\" sourceRef=\"SiteCodeCreation\" targetRef=\"UpdateSiteDetails\" /><bpmn:sequenceFlow id=\"flow2\" sourceRef=\"SiteCodeCreation\" targetRef=\"LegalAgreement\" /><bpmn:sequenceFlow id=\"flow3\" sourceRef=\"SiteCodeCreation\" targetRef=\"JointMeeting\" /><bpmn:sequenceFlow id=\"flow4\" sourceRef=\"SiteCodeCreation\" targetRef=\"SecurityDeposite\" /><bpmn:sequenceFlow id=\"flow5\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkTiling\" /><bpmn:sequenceFlow id=\"flow6\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkWashroom\" /><bpmn:sequenceFlow id=\"flow7\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkShutter\" /><bpmn:sequenceFlow id=\"flow8\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPOP\" /><bpmn:sequenceFlow id=\"flow9\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPainting\" /><bpmn:sequenceFlow id=\"flow10\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkGlazing\" /><bpmn:sequenceFlow id=\"flow11\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkPower\" /><bpmn:sequenceFlow id=\"flow12\" sourceRef=\"JointMeeting\" targetRef=\"LLScopeOfWorkExternalDevelopment\" /><bpmn:sequenceFlow id=\"flow13\" sourceRef=\"HandoverToProjects\" targetRef=\"Approval_HandoverFromRealEstate\" /><bpmn:sequenceFlow id=\"flow14\" sourceRef=\"ProjectKickOfMeeting\" targetRef=\"MaterialAndManpowerMovement\" /><bpmn:sequenceFlow id=\"flow15\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWorkCivil\" /><bpmn:sequenceFlow id=\"flow16\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_Electrical\" /><bpmn:sequenceFlow id=\"flow17\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_Electrical\" /><bpmn:sequenceFlow id=\"flow18\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_HVAC\" /><bpmn:sequenceFlow id=\"flow19\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" /><bpmn:sequenceFlow id=\"flow20\" sourceRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" targetRef=\"FixtureInstallation\" /><bpmn:sequenceFlow id=\"flow21\" sourceRef=\"FixtureInstallation\" targetRef=\"Installation\" /><bpmn:sequenceFlow id=\"flow22\" sourceRef=\"Power\" targetRef=\"TestingAndCommissioning\" /><bpmn:sequenceFlow id=\"flow23\" sourceRef=\"Installation\" targetRef=\"HandOverToNSO\" /><bpmn:sequenceFlow id=\"flow24\" sourceRef=\"HandoverFromProjects\" targetRef=\"SiteMeasurement_Projects\" /><bpmn:sequenceFlow id=\"flow25\" sourceRef=\"SiteMeasurement_Projects\" targetRef=\"GoodsReceiptNote_SAP\" /><bpmn:sequenceFlow id=\"flow26\" sourceRef=\"GoodsReceiptNote_SAP\" targetRef=\"BillSubmission_Projects\" /><bpmn:sequenceFlow id=\"flow27\" sourceRef=\"SiteCodeCreation\" targetRef=\"ApplyForBroadband\" /><bpmn:sequenceFlow id=\"flow28\" sourceRef=\"HandOverToNSO\" targetRef=\"Approval_HandoverFromProjects\" /><bpmn:sequenceFlow id=\"flow29\" sourceRef=\"HandoverFromProjects\" targetRef=\"PestControl\" /><bpmn:sequenceFlow id=\"flow28\" sourceRef=\"Approval_HandoverFromRealEstate\" targetRef=\"AppointHousekeepingAndSecurityAgency\" /><bpmn:sequenceFlow id=\"flow31\" sourceRef=\"ITReadiness\" targetRef=\"ITChecklist\" /><bpmn:sequenceFlow id=\"flow32\" sourceRef=\"ITReadiness\" targetRef=\"PlutusInstallation\" /><bpmn:sequenceFlow id=\"flow33\" sourceRef=\"HandoverFromProjects\" targetRef=\"CashPickAgency\" /><bpmn:sequenceFlow id=\"flow34\" sourceRef=\"StocksDispatched\" targetRef=\"Stocking\" /><bpmn:sequenceFlow id=\"flow35\" sourceRef=\"Stocking\" targetRef=\"PerishableItemsDeliveryConfirmation\" /><bpmn:sequenceFlow id=\"flow36\" sourceRef=\"ITReadiness\" targetRef=\"TestScan_POS\" /><bpmn:sequenceFlow id=\"flow36\" sourceRef=\"ITReadiness\" targetRef=\"TestScan_POS\" /><bpmn:sequenceFlow id=\"flow37\" sourceRef=\"PerishableItemsDeliveryConfirmation\" targetRef=\"PerishableMerchandise_RecceivedAndDisplayed\" /><bpmn:sequenceFlow id=\"flow38\" sourceRef=\"Stocking\" targetRef=\"MerchandiseInstock95Plus\" /><bpmn:sequenceFlow id=\"flow39\" sourceRef=\"MerchandiseInstock95Plus\" targetRef=\"CheckBackupPlanforextrastocks\" /><bpmn:sequenceFlow id=\"flow40\" sourceRef=\"HandoverFromProjects\" targetRef=\"GatepassesInwardRegistersAndOtherDocuments\" /><bpmn:sequenceFlow id=\"flow41\" sourceRef=\"Stocking\" targetRef=\"SelsDisplayAndSignages\" /><bpmn:sequenceFlow id=\"flow42\" sourceRef=\"HandoverFromProjects\" targetRef=\"Licenses\" /><bpmn:sequenceFlow id=\"flow43\" sourceRef=\"CheckBackupPlanforextrastocks\" targetRef=\"HandoverToOperations\" /><bpmn:sequenceFlow id=\"flow44\" sourceRef=\"ITChecklist\" targetRef=\"InstallInStoreRadioAndDisplayPPL\" /><bpmn:sequenceFlow id=\"flow45\" sourceRef=\"ApplyForBroadband\" targetRef=\"BroadbandAvailable\" /><bpmn:sequenceFlow id=\"flow46\" sourceRef=\"ProjectKickOfMeeting\" targetRef=\"SiteSurvey\" /><bpmn:sequenceFlow id=\"flow47\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"LinkFeasibility\" /><bpmn:sequenceFlow id=\"flow48\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"BOQSubmission_IT\" /><bpmn:sequenceFlow id=\"flow49\" sourceRef=\"BOQSubmission_IT\" targetRef=\"STOPOAgainstBOQ\" /><bpmn:sequenceFlow id=\"flow50\" sourceRef=\"STOPOAgainstBOQ\" targetRef=\"MovementOfMaterialAgainstSTO\" /><bpmn:sequenceFlow id=\"flow51\" sourceRef=\"LinkFeasibility\" targetRef=\"LinkAvailability\" /><bpmn:sequenceFlow id=\"flow52\" sourceRef=\"JointMeeting\" targetRef=\"ConfirmLLScopeofWork\" /><bpmn:sequenceFlow id=\"flow53\" sourceRef=\"ConfirmLLScopeofWork\" targetRef=\"PrepareSiteSpecificCapEX\" /><bpmn:sequenceFlow id=\"flow54\" sourceRef=\"PrepareSiteSpecificCapEX\" targetRef=\"ApprovalCapex\" /><bpmn:sequenceFlow id=\"flow55\" sourceRef=\"SiteCodeCreation\" targetRef=\"ZonalAndHOLayoutSignOff\" /><bpmn:sequenceFlow id=\"flow56\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"LayoutsForFixtureBOQs\" /><bpmn:sequenceFlow id=\"flow57\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"LayoutsForGFCDrawingsAndBOQ\" /><bpmn:sequenceFlow id=\"flow58\" sourceRef=\"LayoutsForGFCDrawingsAndBOQ\" targetRef=\"HOLayoutReview\" /><bpmn:sequenceFlow id=\"flow59\" sourceRef=\"ITChecklist\" targetRef=\"InstallInStoreRadioAndDisplayPPL\" /><bpmn:sequenceFlow id=\"flow60\" sourceRef=\"SiteCodeCreation\" targetRef=\"CatchmentStudyMarketingPlan\" /><bpmn:sequenceFlow id=\"flow61\" sourceRef=\"CatchmentStudyMarketingPlan\" targetRef=\"Approval_CatchmentStudyAndMarketiingPlan\" /><bpmn:sequenceFlow id=\"flow62\" sourceRef=\"SiteCodeCreation\" targetRef=\"OnlineMarketingPlan\" /><bpmn:sequenceFlow id=\"flow63\" sourceRef=\"OnlineMarketingPlan\" targetRef=\"Approval_OnlineMarkrtingPlan\" /><bpmn:sequenceFlow id=\"flow64\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"SignageOpeningSoon\" /><bpmn:sequenceFlow id=\"flow65\" sourceRef=\"Approval_OnlineMarkrtingPlan\" targetRef=\"StoreAddressUpdate\" /><bpmn:sequenceFlow id=\"flow66\" sourceRef=\"Approval_CatchmentStudyAndMarketiingPlan\" targetRef=\"MarketingPO\" /><bpmn:sequenceFlow id=\"flow67\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"MarketingCollaterals\" /><bpmn:sequenceFlow id=\"flow67\" sourceRef=\"ReleaseMarketingPO\" targetRef=\"MarketingCollaterals\" /><bpmn:sequenceFlow id=\"flow68\" sourceRef=\"SiteCodeCreation\" targetRef=\"OnlineMarketingPlan\" /><bpmn:sequenceFlow id=\"flow69\" sourceRef=\"BrandAwarenessCampaign\" targetRef=\"OnlineBrandAwarenessAndLeadGeneration\" /><bpmn:sequenceFlow id=\"flow70\" sourceRef=\"HandoverFromProjects\" targetRef=\"CatchmentEngagement_CampaignSupportAndStoreLaunchActivities\" /><bpmn:sequenceFlow id=\"flow71\" sourceRef=\"SiteCodeCreation\" targetRef=\"StoreCodeRegistrationOnOneLoyalty\" /><bpmn:sequenceFlow id=\"flow72\" sourceRef=\"MarketingCollaterals\" targetRef=\"PreOpeningChecklist\" /><bpmn:sequenceFlow id=\"flow73\" sourceRef=\"OJTAndFeedback_CSA\" targetRef=\"ClassroomTraining_Membership\" /><bpmn:sequenceFlow id=\"flow74\" sourceRef=\"MembershipDriveAssignResourcesAndTargets\" targetRef=\"DTO_EnrolmentRegistration\" /><bpmn:sequenceFlow id=\"flow75\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"AllocateVendorAndReleaseDesignPo\" /><bpmn:sequenceFlow id=\"flow76\" sourceRef=\"AllocateVendorAndReleaseDesignPo\" targetRef=\"SiteSurveyVMEstimate\" /><bpmn:sequenceFlow id=\"flow77\" sourceRef=\"SiteSurveyVMEstimate\" targetRef=\"VMDocketPrep_ZonalVM\" /><bpmn:sequenceFlow id=\"flow78\" sourceRef=\"UpdateSiteDetails\" targetRef=\"EscalatedBudgetApproval\" /><bpmn:sequenceFlow id=\"flow79\" sourceRef=\"VMDocketPrep_ZonalVM\" targetRef=\"Approval_VMDesignDocketHO\" /><bpmn:sequenceFlow id=\"flow80\" sourceRef=\"Approval_VMDesignDocketHO\" targetRef=\"VM_DocketAndPOReleased\" /><bpmn:sequenceFlow id=\"flow81\" sourceRef=\"VM_DocketAndPOReleased\" targetRef=\"BOQAndPOProcess\" /><bpmn:sequenceFlow id=\"flow82\" sourceRef=\"LayoutsForFixtureBOQs\" targetRef=\"BulkOrderVMArticleSupply\" /><bpmn:sequenceFlow id=\"flow83\" sourceRef=\"BOQAndPOProcess\" targetRef=\"MaterialDeliveryAndFacadeInstallation\" /><bpmn:sequenceFlow id=\"flow84\" sourceRef=\"FixtureInstallation\" targetRef=\"Installation_InstoreBranding\" /><bpmn:sequenceFlow id=\"flow85\" sourceRef=\"SiteMeasurement_Projects\" targetRef=\"MeasurementGNRAndBillSubmissionVM\" /><bpmn:sequenceFlow id=\"flow86\" sourceRef=\"CapExLoadedinSAP\" targetRef=\"CatchmentStudyRegionalBrands\" /><bpmn:sequenceFlow id=\"flow87\" sourceRef=\"CatchmentStudyRegionalBrands\" targetRef=\"FinalizeListingAndMappingOfAssortment\" /><bpmn:sequenceFlow id=\"flow88\" sourceRef=\"FinalizeListingAndMappingOfAssortment\" targetRef=\"BusinessHeadsApprovalOfStoreAssortment\" /><bpmn:sequenceFlow id=\"flow89\" sourceRef=\"BusinessHeadsApprovalOfStoreAssortment\" targetRef=\"ProvideFinalisedAssortmentToSupplyChain\" /><bpmn:sequenceFlow id=\"flow90\" sourceRef=\"BusinessHeadsApprovalOfStoreAssortment\" targetRef=\"PrepareModularMPMPlanInJDA\" /><bpmn:sequenceFlow id=\"flow91\" sourceRef=\"PrepareModularMPMPlanInJDA\" targetRef=\"ExecutionofModularMPMPlaninStore\" /><bpmn:sequenceFlow id=\"flow92\" sourceRef=\"FinalizeListingAndMappingOfAssortment\" targetRef=\"MBQUpdate\" /><bpmn:sequenceFlow id=\"flow93\" sourceRef=\"MBQUpdate\" targetRef=\"StockReadiness\" /><bpmn:sequenceFlow id=\"flow94\" sourceRef=\"Installation\" targetRef=\"StoreOpeningDateAnnouncement\" /><bpmn:sequenceFlow id=\"flow95\" sourceRef=\"StoreOpeningDateAnnouncement\" targetRef=\"StocksDispatched\" /><bpmn:sequenceFlow id=\"flow96\" sourceRef=\"StoreOpeningDateAnnouncement\" targetRef=\"DirectOrderingStore\" /><bpmn:sequenceFlow id=\"flow97\" sourceRef=\"InitiateHiringProcess_CSA\" targetRef=\"SourcingAndScreeningCVs_CSA\" /><bpmn:sequenceFlow id=\"flow98\" sourceRef=\"InitiateHiringProcess_SK\" targetRef=\"SourcingAndScreeningCVs_SK\" /><bpmn:sequenceFlow id=\"flow99\" sourceRef=\"SourcingAndScreeningCVs_CSA\" targetRef=\"InterviewAndFinalizeCandidates_CSA\" /><bpmn:sequenceFlow id=\"flow100\" sourceRef=\"SourcingAndScreeningCVs_SK\" targetRef=\"InterviewAndFinalizeCandidates_SK\" /><bpmn:sequenceFlow id=\"flow101\" sourceRef=\"InterviewAndFinalizeCandidates_CSA\" targetRef=\"IssueOfferLetter_CSA\" /><bpmn:sequenceFlow id=\"flow102\" sourceRef=\"InterviewAndFinalizeCandidates_SK\" targetRef=\"IssueOfferLetter_SK\" /><bpmn:sequenceFlow id=\"flow103\" sourceRef=\"IssueOfferLetter_CSA\" targetRef=\"Onboarding_CSA\" /><bpmn:sequenceFlow id=\"flow104\" sourceRef=\"IssueOfferLetter_SK\" targetRef=\"Onboarding_SK\" /><bpmn:sequenceFlow id=\"flow105\" sourceRef=\"CRTAndOJT_PlanDateTrainerAndVenue_CSA\" targetRef=\"CRTAndOJTCommunicateTrainingVenueToAPO_CSA\" /><bpmn:sequenceFlow id=\"flow106\" sourceRef=\"CRTAndOJT_PlanDateTrainerAndVenue_SK\" targetRef=\"CRTAndOJTCommunicateTrainingVenueToAPO_SK\" /><bpmn:sequenceFlow id=\"flow107\" sourceRef=\"Onboarding_CSA\" targetRef=\"OnboardingAcceptance_CSA\" /><bpmn:sequenceFlow id=\"flow108\" sourceRef=\"Onboarding_SK\" targetRef=\"OnboardingAcceptance_SK\" /><bpmn:sequenceFlow id=\"flow109\" sourceRef=\"OnboardingAcceptance_CSA\" targetRef=\"Induction_CRTDay1_CSA\" /><bpmn:sequenceFlow id=\"flow110\" sourceRef=\"Induction_CRTDay1_CSA\" targetRef=\"Induction_CRTDay2_CSA\" /><bpmn:sequenceFlow id=\"flow111\" sourceRef=\"Induction_CRTDay2_CSA\" targetRef=\"Induction_CRTDay3_CSA\" /><bpmn:sequenceFlow id=\"flow112\" sourceRef=\"OnboardingAcceptance_SK\" targetRef=\"Induction_CRTDay1_SK\" /><bpmn:sequenceFlow id=\"flow113\" sourceRef=\"Induction_CRTDay1_SK\" targetRef=\"Induction_CRTDay2_SK\" /><bpmn:sequenceFlow id=\"flow114\" sourceRef=\"Induction_CRTDay2_SK\" targetRef=\"Induction_CRTDay3_SK\" /><bpmn:sequenceFlow id=\"flow115\" sourceRef=\"Induction_CRTDay3_CSA\" targetRef=\"OJTAndFeedback_CSA\" /><bpmn:sequenceFlow id=\"flow116\" sourceRef=\"Induction_CRTDay3_SK\" targetRef=\"OJTAndFeedback_SK\" /><bpmn:sequenceFlow id=\"flow117\" sourceRef=\"OJTAndFeedback_CSA\" targetRef=\"CSAMembershipDrive\" /><bpmn:sequenceFlow id=\"flow118\" sourceRef=\"OJTAndFeedback_SK\" targetRef=\"SKMembershipDrive\" /><bpmn:sequenceFlow id=\"flow119\" sourceRef=\"CSAMembershipDrive\" targetRef=\"CSAAssessmentAndHandover\" /><bpmn:sequenceFlow id=\"flow120\" sourceRef=\"SKMembershipDrive\" targetRef=\"SKAssessmentAndHandover\" /><bpmn:sequenceFlow id=\"flow121\" sourceRef=\"UpdateSiteDetails\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow122\" sourceRef=\"LegalAgreement\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow123\" sourceRef=\"JointMeeting\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow124\" sourceRef=\"SecurityDeposite\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow125\" sourceRef=\"ApplyForBroadband\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow126\" sourceRef=\"ZonalAndHOLayoutSignOff\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow127\" sourceRef=\"CatchmentStudyMarketingPlan\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow128\" sourceRef=\"OnlineMarketingPlan\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow129\" sourceRef=\"StoreCodeRegistrationOnOneLoyalty\" targetRef=\"parallelGateway1\" /><bpmn:sequenceFlow id=\"flow130\" sourceRef=\"LLScopeOfWorkTiling\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow131\" sourceRef=\"LLScopeOfWorkWashroom\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow132\" sourceRef=\"LLScopeOfWorkShutter\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow133\" sourceRef=\"LLScopeOfWorkPOP\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow134\" sourceRef=\"LLScopeOfWorkPainting\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow135\" sourceRef=\"LLScopeOfWorkGlazing\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow136\" sourceRef=\"LLScopeOfWorkPower\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow137\" sourceRef=\"LLScopeOfWorkExternalDevelopment\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow138\" sourceRef=\"ConfirmLLScopeofWork\" targetRef=\"parallelGateway2\" /><bpmn:sequenceFlow id=\"flow139\" sourceRef=\"ProjectsScopeOfWorkCivil\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow140\" sourceRef=\"ProjectsScopeOfWork_Electrical\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow141\" sourceRef=\"ProjectsScopeOfWork_HVAC\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow142\" sourceRef=\"ProjectsScopeOfWork_FixturingAndITReadiness\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow143\" sourceRef=\"LLScopeOfWorkExternalDevelopment\" targetRef=\"parallelGateway3\" /><bpmn:sequenceFlow id=\"flow144\" sourceRef=\"SiteMeasurement_Projects\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow145\" sourceRef=\"PestControl\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow146\" sourceRef=\"CashPickAgency\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow147\" sourceRef=\"GatepassesInwardRegistersAndOtherDocuments\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow148\" sourceRef=\"Licenses\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow149\" sourceRef=\"CatchmentEngagement_CampaignSupportAndStoreLaunchActivities\" targetRef=\"parallelGateway4\" /><bpmn:sequenceFlow id=\"flow150\" sourceRef=\"Installation\" targetRef=\"parallelGateway5\" /><bpmn:sequenceFlow id=\"flow151\" sourceRef=\"Installation_InstoreBranding\" targetRef=\"parallelGateway5\" /><bpmn:sequenceFlow id=\"flow152\" sourceRef=\"HandOverToNSO\" targetRef=\"parallelGateway6\" /><bpmn:sequenceFlow id=\"flow153\" sourceRef=\"StoreOpeningDateAnnouncement\" targetRef=\"parallelGateway6\" /><bpmn:sequenceFlow id=\"flow154\" sourceRef=\"GoodsReceiptNote_SAP\" targetRef=\"parallelGateway7\" /><bpmn:sequenceFlow id=\"flow155\" sourceRef=\"MeasurementGNRAndBillSubmissionVM\" targetRef=\"parallelGateway7\" /><bpmn:sequenceFlow id=\"flow156\" sourceRef=\"ITChecklist\" targetRef=\"parallelGateway8\" /><bpmn:sequenceFlow id=\"flow157\" sourceRef=\"PlutusInstallation\" targetRef=\"parallelGateway8\" /><bpmn:sequenceFlow id=\"flow158\" sourceRef=\"TestScan_POS\" targetRef=\"parallelGateway7\" /><bpmn:sequenceFlow id=\"flow159\" sourceRef=\"PerishableItemsDeliveryConfirmation\" targetRef=\"parallelGateway9\" /><bpmn:sequenceFlow id=\"flow160\" sourceRef=\"MerchandiseInstock95Plus\" targetRef=\"parallelGateway9\" /><bpmn:sequenceFlow id=\"flow161\" sourceRef=\"SelsDisplayAndSignages\" targetRef=\"parallelGateway9\" /><bpmn:sequenceFlow id=\"flow162\" sourceRef=\"MaterialAndManpowerMovement\" targetRef=\"parallelGateway10\" /><bpmn:sequenceFlow id=\"flow163\" sourceRef=\"SiteSurvey\" targetRef=\"parallelGateway10\" /><bpmn:sequenceFlow id=\"flow164\" sourceRef=\"LinkFeasibility\" targetRef=\"parallelGateway11\" /><bpmn:sequenceFlow id=\"flow165\" sourceRef=\"BOQSubmission_IT\" targetRef=\"parallelGateway11\" /><bpmn:sequenceFlow id=\"flow166\" sourceRef=\"AllocateVendorAndReleaseDesignPo\" targetRef=\"parallelGateway11\" /><bpmn:sequenceFlow id=\"flow167\" sourceRef=\"CatchmentStudyRegionalBrands\" targetRef=\"parallelGateway11\" /><bpmn:sequenceFlow id=\"flow168\" sourceRef=\"LayoutsForFixtureBOQs\" targetRef=\"parallelGateway12\" /><bpmn:sequenceFlow id=\"flow167\" sourceRef=\"LayoutsForGFCDrawingsAndBOQ\" targetRef=\"parallelGateway12\" /><bpmn:sequenceFlow id=\"flow170\" sourceRef=\"SignageOpeningSoon\" targetRef=\"parallelGateway13\" /><bpmn:sequenceFlow id=\"flow171\" sourceRef=\"MarketingCollaterals\" targetRef=\"parallelGateway13\" /><bpmn:sequenceFlow id=\"flow172\" sourceRef=\"BrandAwarenessCampaign\" targetRef=\"parallelGateway14\" /><bpmn:sequenceFlow id=\"flow173\" sourceRef=\"DTO_EnrolmentRegistration\" targetRef=\"parallelGateway14\" /><bpmn:sequenceFlow id=\"flow174\" sourceRef=\"ProvideFinalisedAssortmentToSupplyChain\" targetRef=\"parallelGateway15\" /><bpmn:sequenceFlow id=\"flow175\" sourceRef=\"PrepareModularMPMPlanInJDA\" targetRef=\"parallelGateway15\" /><bpmn:sequenceFlow id=\"flow176\" sourceRef=\"StocksDispatched\" targetRef=\"parallelGateway16\" /><bpmn:sequenceFlow id=\"flow177\" sourceRef=\"DirectOrderingStore\" targetRef=\"parallelGateway16\" /><bpmn:sequenceFlow id=\"flow178\" sourceRef=\"LLScopeOfWorkExternalDevelopment\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow179\" sourceRef=\"LLScopeOfWorkTiling\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow180\" sourceRef=\"LLScopeOfWorkWashroom\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow181\" sourceRef=\"LLScopeOfWorkShutter\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow182\" sourceRef=\"LLScopeOfWorkPOP\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow183\" sourceRef=\"LLScopeOfWorkPainting\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow184\" sourceRef=\"LLScopeOfWorkGlazing\" targetRef=\"HandoverToProjects\" /><bpmn:sequenceFlow id=\"flow185\" sourceRef=\"LLScopeOfWorkTiling\" targetRef=\"ProjectKickOfMeeting\" /><bpmn:sequenceFlow id=\"flow186\" sourceRef=\"LLScopeOfWorkWashroom\" targetRef=\"ProjectKickOfMeeting\" /></bpmn:process></bpmn:definitions>"}



xml2js.parseString(xmlString.xml, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        const bpmnXML = builder.buildObject(result);
        fs.writeFileSync('ss.xml', (bpmnXML));
        console.log("file has been saved",bpmnXML);
    }
});

 