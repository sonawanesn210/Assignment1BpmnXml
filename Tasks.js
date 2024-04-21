const fs = require("fs");
const BpmnModdle = require("bpmn-moddle");
const moddle = new BpmnModdle();
const SiteCodeCreation = moddle.create("bpmn:Task", { id: "SiteCodeCreation" });
const UpdateSiteDetails = moddle.create("bpmn:Task", {
  id: "UpdateSiteDetails",
});
const LegalAgreement = moddle.create("bpmn:Task", { id: "LegalAgreement" });
const JointMeeting = moddle.create("bpmn:Task", { id: "JointMeeting" });

const SecurityDeposite = moddle.create("bpmn:Task", { id: "SecurityDeposite" });

const LLScopeOfWorkTiling = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkTiling",
});

const LLScopeOfWorkWashroom = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkWashroom",
});

const LLScopeOfWorkShutter = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkShutter",
});

const LLScopeOfWorkPOP = moddle.create("bpmn:Task", { id: "LLScopeOfWorkPOP" });

const LLScopeOfWorkPainting = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkPainting",
});

const LLScopeOfWorkGlazing = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkGlazing",
});

const LLScopeOfWorkPower = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkPower",
});

const LLScopeOfWorkExternalDevelopment = moddle.create("bpmn:Task", {
  id: "LLScopeOfWorkExternalDevelopment",
});

const HandoverToProjects = moddle.create("bpmn:Task", {
  id: "HandoverToProjects",
});

const Approval_HandoverFromRealEstate = moddle.create("bpmn:Task", {
  id: "Approval_HandoverFromRealEstate",
});

const ProjectKickOfMeeting = moddle.create("bpmn:Task", {
  id: "ProjectKickOfMeeting",
});

const MaterialAndManpowerMovement = moddle.create("bpmn:Task", {
  id: "MaterialAndManpowerMovement",
});

const ProjectsScopeOfWork_Civil = moddle.create("bpmn:Task", {
  id: "ProjectsScopeOfWorkCivil",
});

const ProjectsScopeOfWork_Electrical = moddle.create("bpmn:Task", {
  id: "ProjectsScopeOfWork_Electrical",
});

const ProjectsScopeOfWork_HVAC = moddle.create("bpmn:Task", {
  id: "ProjectsScopeOfWork_HVAC",
});

const ProjectsScopeOfWork_FixturingAndITReadiness = moddle.create("bpmn:Task", {
  id: "ProjectsScopeOfWork_FixturingAndITReadiness",
});

const FixtureInstallation = moddle.create("bpmn:Task", {
  id: "FixtureInstallation",
});

const Installation = moddle.create("bpmn:Task", { id: "Installation" });

const TestingAndCommissioning = moddle.create("bpmn:Task", {
  id: "TestingAndCommissioning",
});

const HandOverToNSO = moddle.create("bpmn:Task", { id: "HandOverToNSO" });
const SiteMeasurement_Projects = moddle.create("bpmn:Task", {
  id: "SiteMeasurement_Projects",
});
const GoodsReceiptNote_SAP = moddle.create("bpmn:Task", {
  id: "GoodsReceiptNote_SAP",
});
const BillSubmission_Projects = moddle.create("bpmn:Task", {
  id: "BillSubmission_Projects",
});
const Power = moddle.create("bpmn:Task", { id: "Power" });
const HandoverFromProjects = moddle.create("bpmn:Task", {
  id: "HandoverFromProjects",
});
const ApplyForBroadband = moddle.create("bpmn:Task", {
  id: "ApplyForBroadband",
});
const Approval_HandoverFromProjects = moddle.create("bpmn:Task", {
  id: "Approval_HandoverFromProjects",
});
const PestControl = moddle.create("bpmn:Task", { id: "PestControl" });
const AppointHousekeepingAndSecurityAgency = moddle.create("bpmn:Task", {
  id: "AppointHousekeepingAndSecurityAgency",
});

const ITReadiness = moddle.create("bpmn:Task", { id: "ITReadiness" });
const ITChecklist = moddle.create("bpmn:Task", { id: "ITChecklist" });
const PlutusInstallation = moddle.create("bpmn:Task", {
  id: "PlutusInstallation",
});
const CashPickAgency = moddle.create("bpmn:Task", { id: "CashPickAgency" });
const CashMemoValidation = moddle.create("bpmn:Task", {
  id: "CashMemoValidation",
});
const Stocking = moddle.create("bpmn:Task", { id: "Stocking" });
const PerishableItemsDeliveryConfirmation = moddle.create("bpmn:Task", {
  id: "PerishableItemsDeliveryConfirmation",
});
const TestScan_POS = moddle.create("bpmn:Task", { id: "TestScan_POS" });
const PerishableMerchandise_RecceivedAndDisplayed = moddle.create("bpmn:Task", {
  id: "PerishableMerchandise_RecceivedAndDisplayed",
});
const MerchandiseInstock95Plus = moddle.create("bpmn:Task", {
  id: "MerchandiseInstock95Plus",
});
const CheckBackupPlanforextrastocks = moddle.create("bpmn:Task", {
  id: "CheckBackupPlanforextrastocks",
});
const GatepassesInwardRegistersAndOtherDocuments = moddle.create("bpmn:Task", {
  id: "GatepassesInwardRegistersAndOtherDocuments",
});
const SelsDisplayAndSignages = moddle.create("bpmn:Task", {
  id: "SelsDisplayAndSignages",
});
const Licenses = moddle.create("bpmn:Task", { id: "Licenses" });
const HandoverToOperations = moddle.create("bpmn:Task", {
  id: "HandoverToOperations",
});
const InstallInStoreRadioAndDisplayPPL = moddle.create("bpmn:Task", {
  id: "InstallInStoreRadioAndDisplayPPL",
});
const BroadbandAvailable = moddle.create("bpmn:Task", {
  id: "BroadbandAvailable",
});
const SiteSurvey = moddle.create("bpmn:Task", { id: "SiteSurvey" });

const LinkFeasibility = moddle.create("bpmn:Task", { id: "LinkFeasibility" });
const BOQSubmission_IT = moddle.create("bpmn:Task", { id: "BOQSubmission_IT" });
const STOPOAgainstBOQ = moddle.create("bpmn:Task", { id: "STOPOAgainstBOQ" });
const MovementOfMaterialAgainstSTO = moddle.create("bpmn:Task", {
  id: "MovementOfMaterialAgainstSTO",
});
const LinkAvailability = moddle.create("bpmn:Task", { id: "LinkAvailability" });
const RouterConfiguration = moddle.create("bpmn:Task", {
  id: "RouterConfiguration",
});
const CapExLoadedinSAP = moddle.create("bpmn:Task", { id: "CapExLoadedinSAP" });
const ConfirmLLScopeofWork = moddle.create("bpmn:Task", {
  id: "ConfirmLLScopeofWork",
});
const PrepareSiteSpecificCapEX = moddle.create("bpmn:Task", {
  id: "PrepareSiteSpecificCapEX",
});
const ApprovalCapex = moddle.create("bpmn:Task", { id: "ApprovalCapex" });
const BOQS = moddle.create("bpmn:Task", { id: "BOQS" });
const POReleaseBoughtItems = moddle.create("bpmn:Task", {
  id: "POReleaseBoughtItems",
});
const POReleaseServices = moddle.create("bpmn:Task", {
  id: "POReleaseServices",
});
const CapexLoadedInSystem = moddle.create("bpmn:Task", {
  id: "CapexLoadedInSystem",
});

const BOQsForFixturesServicesCivilInteriorAndMEP = moddle.create("bpmn:Task", {
  id: "BOQsForFixturesServicesCivilInteriorAndMEP",
});

const SiteMeasurementsLeaseLineAndPreliminaryLayout = moddle.create(
  "bpmn:Task",
  { id: "SiteMeasurementsLeaseLineAndPreliminaryLayout" }
);

const ZonalAndHOLayoutSignOff = moddle.create("bpmn:Task", {
  id: "ZonalAndHOLayoutSignOff",
});
const LayoutsForFixtureBOQs = moddle.create("bpmn:Task", {
  id: "LayoutsForFixtureBOQs",
});
const LayoutsForGFCDrawingsAndBOQ = moddle.create("bpmn:Task", {
  id: "LayoutsForGFCDrawingsAndBOQ",
});
const HOLayoutReview = moddle.create("bpmn:Task", { id: "HOLayoutReview" });
const ShareBOQToCPCTeamforPOCreation = moddle.create("bpmn:Task", {
  id: "ShareBOQToCPCTeamforPOCreation",
});
const atchmentStudyMarketingPlan_zone = moddle.create("bpmn:Task", {
  id: "atchmentStudyMarketingPlan_zone",
});
const Approval_CatchmentStudyAndMarketiingPlan = moddle.create("bpmn:Task", {
  id: "Approval_CatchmentStudyAndMarketiingPlan",
});
const OnlineMarketingPlan = moddle.create("bpmn:Task", {
  id: "OnlineMarketingPlan",
});
const Approval_OnlineMarkrtingPlan = moddle.create("bpmn:Task", {
  id: "Approval_OnlineMarkrtingPlan",
});
const ReleaseMarketingPO = moddle.create("bpmn:Task", {
  id: "ReleaseMarketingPO",
});
const SignageOpeningSoon = moddle.create("bpmn:Task", {
  id: "SignageOpeningSoon",
});

const StoreAddressUpdate = moddle.create("bpmn:Task", {
  id: "StoreAddressUpdate",
});
const MarketingPO = moddle.create("bpmn:Task", { id: "MarketingPO" });
const MarketingCollaterals = moddle.create("bpmn:Task", {
  id: "MarketingCollaterals",
});
const BrandAwarenessCampaign = moddle.create("bpmn:Task", {
  id: "BrandAwarenessCampaign",
});
const OnlineBrandAwarenessAndLeadGeneration = moddle.create("bpmn:Task", {
  id: "OnlineBrandAwarenessAndLeadGeneration",
});
const CatchmentEngagement_CampaignSupportAndStoreLaunchActivities =
  moddle.create("bpmn:Task", {
    id: "CatchmentEngagement_CampaignSupportAndStoreLaunchActivities",
  });
const MembershipDriveAssignResourcesAndTargets = moddle.create("bpmn:Task", {
  id: "MembershipDriveAssignResourcesAndTargets",
});
const StoreCodeRegistrationOnOneLoyalty = moddle.create("bpmn:Task", {
  id: "StoreCodeRegistrationOnOneLoyalty",
});
const PreOpeningChecklist = moddle.create("bpmn:Task", {
  id: "PreOpeningChecklist",
});
const ClassroomTraining_Membership = moddle.create("bpmn:Task", {
  id: "ClassroomTraining_Membership",
});
const DTO_EnrolmentRegistration = moddle.create("bpmn:Task", {
  id: "DTO_EnrolmentRegistration",
});
const MemberInitiation = moddle.create("bpmn:Task", { id: "MemberInitiation" });
const CatchmentEngagement = moddle.create("bpmn:Task", {
  id: "CatchmentEngagement",
});
const CommunityEngagement_CampaignSupportAndStoreLaunchActivities =
  moddle.create("bpmn:Task", {
    id: "CommunityEngagement_CampaignSupportAndStoreLaunchActivities",
  });
const AllocateVendorAndReleaseDesignPo = moddle.create("bpmn:Task", {
  id: "AllocateVendorAndReleaseDesignPo",
});
const SiteSurveyVMEstimate = moddle.create("bpmn:Task", {
  id: "SiteSurveyVMEstimate",
});
const VMDocketPrep_ZonalVM = moddle.create("bpmn:Task", {
  id: "VMDocketPrep_ZonalVM",
});
const EscalatedBudgetApproval = moddle.create("bpmn:Task", {
  id: "EscalatedBudgetApproval",
});
const Approval_VMDesignDocketHO = moddle.create("bpmn:Task", {
  id: "Approval_VMDesignDocketHO",
});
const VM_DocketAndPOReleased = moddle.create("bpmn:Task", {
  id: "VM_DocketAndPOReleased",
});
const BOQAndPOProcess = moddle.create("bpmn:Task", { id: "BOQAndPOProcess" });
const BulkOrderVMArticleSupply = moddle.create("bpmn:Task", {
  id: "BulkOrderVMArticleSupply",
});
const MaterialDeliveryAndFacadeInstallation = moddle.create("bpmn:Task", {
  id: "MaterialDeliveryAndFacadeInstallation",
});
const Installation_InstoreBranding = moddle.create("bpmn:Task", {
  id: "Installation_InstoreBranding",
});
const MeasurementGNRAndBillSubmissionVM = moddle.create("bpmn:Task", {
  id: "MeasurementGNRAndBillSubmissionVM",
});
const CatchmentStudyMarketingPlan = moddle.create("bpmn:Task", {
  id: "CatchmentStudyMarketingPlan",
});
const CatchmentStudyRegionalBrands = moddle.create("bpmn:Task", {
  id: "CatchmentStudyRegionalBrands",
});
const FinalizeListingAndMappingOfAssortment = moddle.create("bpmn:Task", {
  id: "FinalizeListingAndMappingOfAssortment",
});
const BusinessHeadsApprovalOfStoreAssortment = moddle.create("bpmn:Task", {
  id: "BusinessHeadsApprovalOfStoreAssortment",
});
const ProvideFinalisedAssortmentToSupplyChain = moddle.create("bpmn:Task", {
  id: "ProvideFinalisedAssortmentToSupplyChain",
});
const PrepareModularMPMPlanInJDA = moddle.create("bpmn:Task", {
  id: "PrepareModularMPMPlanInJDA",
});
const ExecutionofModularMPMPlaninStore = moddle.create("bpmn:Task", {
  id: "ExecutionofModularMPMPlaninStore",
});
const MBQUpdate = moddle.create("bpmn:Task", { id: "MBQUpdate" });
const StockReadiness = moddle.create("bpmn:Task", { id: "StockReadiness" });
const StoreOpeningDateAnnouncement = moddle.create("bpmn:Task", {
  id: "StoreOpeningDateAnnouncement",
});
const DirectOrderingStore = moddle.create("bpmn:Task", {
  id: "DirectOrderingStore",
});
const InitiateHiringProcess_CSA = moddle.create("bpmn:Task", {
  id: "InitiateHiringProcess_CSA",
});
const InitiateHiringProcess_SK = moddle.create("bpmn:Task", {
  id: "InitiateHiringProcess_SK",
});
const SourcingAndScreeningCVs_CSA = moddle.create("bpmn:Task", {
  id: "SourcingAndScreeningCVs_CSA",
});
const SourcingAndScreeningCVs_SK = moddle.create("bpmn:Task", {
  id: "SourcingAndScreeningCVs_SK",
});
const InterviewAndFinalizeCandidates_CSA = moddle.create("bpmn:Task", {
  id: "InterviewAndFinalizeCandidates_CSA",
});
const InterviewAndFinalizeCandidates_SK = moddle.create("bpmn:Task", {
  id: "InterviewAndFinalizeCandidates_SK",
});
const IssueOfferLetter_CSA = moddle.create("bpmn:Task", {
  id: "IssueOfferLetter_CSA",
});
const IssueOfferLetter_SK = moddle.create("bpmn:Task", {
  id: "IssueOfferLetter_SK",
});
const Onboarding_CSA = moddle.create("bpmn:Task", { id: "Onboarding_CSA" });
const Onboarding_SK = moddle.create("bpmn:Task", { id: "Onboarding_SK" });
const CRTAndOJT_PlanDateTrainerAndVenue_CSA = moddle.create("bpmn:Task", {
  id: "CRTAndOJT_PlanDateTrainerAndVenue_CSA",
});
const CRTAndOJT_PlanDateTrainerAndVenue_SK = moddle.create("bpmn:Task", {
  id: "CRTAndOJT_PlanDateTrainerAndVenue_SK",
});
const CRTAndOJTCommunicateTrainingVenueToAPO_CSA = moddle.create("bpmn:Task", {
  id: "CRTAndOJTCommunicateTrainingVenueToAPO_CSA",
});
const CRTAndOJTCommunicateTrainingVenueToAPO_SK = moddle.create("bpmn:Task", {
  id: "CRTAndOJTCommunicateTrainingVenueToAPO_SK",
});
const OnboardingAcceptance_CSA = moddle.create("bpmn:Task", {
  id: "OnboardingAcceptance_CSA",
});

const OnboardingAcceptance_SK = moddle.create("bpmn:Task", {
  id: "OnboardingAcceptance_SK",
});
const Induction_CRTDay1_CSA = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay1_CSA",
});
const Induction_CRTDay2_CSA = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay2_CSA",
});
const Induction_CRTDay3_CSA = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay3_CSA",
});
const Induction_CRTDay1_SK = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay1_SK",
});
const Induction_CRTDay2_SK = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay2_SK",
});
const Induction_CRTDay3_SK = moddle.create("bpmn:Task", {
  id: "Induction_CRTDay3_SK",
});
const OJTAndFeedback_CSA = moddle.create("bpmn:Task", {
  id: "OJTAndFeedback_CSA",
});
const OJTAndFeedback_SK = moddle.create("bpmn:Task", {
  id: "OJTAndFeedback_SK",
});
const CSAMembershipDrive = moddle.create("bpmn:Task", {
  id: "CSAMembershipDrive",
});
const SKMembershipDrive = moddle.create("bpmn:Task", {
  id: "SKMembershipDrive",
});
const CSAAssessmentAndHandover = moddle.create("bpmn:Task", {
  id: "CSAAssessmentAndHandover",
});
const SKAssessmentAndHandover = moddle.create("bpmn:Task", {
  id: "SKAssessmentAndHandover",
});

const StocksDispatched = moddle.create("bpmn:Task", { id: "StocksDispatched" });

// Create sequence flows for linear dependencies
const sequenceFlow1 = moddle.create("bpmn:SequenceFlow", {
  id: "flow1",
  sourceRef: SiteCodeCreation,
  targetRef: UpdateSiteDetails,
});
const sequenceFlow2 = moddle.create("bpmn:SequenceFlow", {
  id: "flow2",
  sourceRef: SiteCodeCreation,
  targetRef: LegalAgreement,
});

const sequenceFlow3 = moddle.create("bpmn:SequenceFlow", {
  id: "flow3",
  sourceRef: SiteCodeCreation,
  targetRef: JointMeeting,
});

const sequenceFlow4 = moddle.create("bpmn:SequenceFlow", {
  id: "flow4",
  sourceRef: SiteCodeCreation,
  targetRef: SecurityDeposite,
});
const sequenceFlow5 = moddle.create("bpmn:SequenceFlow", {
  id: "flow5",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkTiling,
});

const sequenceFlow6 = moddle.create("bpmn:SequenceFlow", {
  id: "flow6",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkWashroom,
});

const sequenceFlow7 = moddle.create("bpmn:SequenceFlow", {
  id: "flow7",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkShutter,
});

const sequenceFlow8 = moddle.create("bpmn:SequenceFlow", {
  id: "flow8",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkPOP,
});

const sequenceFlow9 = moddle.create("bpmn:SequenceFlow", {
  id: "flow9",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkPainting,
});

const sequenceFlow10 = moddle.create("bpmn:SequenceFlow", {
  id: "flow10",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkGlazing,
});

const sequenceFlow11 = moddle.create("bpmn:SequenceFlow", {
  id: "flow11",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkPower,
});

const sequenceFlow12 = moddle.create("bpmn:SequenceFlow", {
  id: "flow12",
  sourceRef: JointMeeting,
  targetRef: LLScopeOfWorkExternalDevelopment,
});

const sequenceFlow13 = moddle.create("bpmn:SequenceFlow", {
  id: "flow13",
  sourceRef: HandoverToProjects,
  targetRef: Approval_HandoverFromRealEstate,
});
const sequenceFlow14 = moddle.create("bpmn:SequenceFlow", {
  id: "flow14",
  sourceRef: ProjectKickOfMeeting,
  targetRef: MaterialAndManpowerMovement,
});
const sequenceFlow15 = moddle.create("bpmn:SequenceFlow", {
  id: "flow15",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: ProjectsScopeOfWork_Civil,
});
const sequenceFlow16 = moddle.create("bpmn:SequenceFlow", {
  id: "flow16",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: ProjectsScopeOfWork_Electrical,
});
const sequenceFlow17 = moddle.create("bpmn:SequenceFlow", {
  id: "flow17",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: ProjectsScopeOfWork_Electrical,
});
const sequenceFlow18 = moddle.create("bpmn:SequenceFlow", {
  id: "flow18",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: ProjectsScopeOfWork_HVAC,
});
const sequenceFlow19 = moddle.create("bpmn:SequenceFlow", {
  id: "flow19",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: ProjectsScopeOfWork_FixturingAndITReadiness,
});
const sequenceFlow20 = moddle.create("bpmn:SequenceFlow", {
  id: "flow20",
  sourceRef: ProjectsScopeOfWork_FixturingAndITReadiness,
  targetRef: FixtureInstallation,
});

const sequenceFlow21 = moddle.create("bpmn:SequenceFlow", {
  id: "flow21",
  sourceRef: FixtureInstallation,
  targetRef: Installation,
});
const sequenceFlow22 = moddle.create("bpmn:SequenceFlow", {
  id: "flow22",
  sourceRef: Power,
  targetRef: TestingAndCommissioning,
});
const sequenceFlow23 = moddle.create("bpmn:SequenceFlow", {
  id: "flow23",
  sourceRef: Installation,
  targetRef: HandOverToNSO,
});
const sequenceFlow24 = moddle.create("bpmn:SequenceFlow", {
  id: "flow24",
  sourceRef: HandoverFromProjects,
  targetRef: SiteMeasurement_Projects,
});
const sequenceFlow25 = moddle.create("bpmn:SequenceFlow", {
  id: "flow25",
  sourceRef: SiteMeasurement_Projects,
  targetRef: GoodsReceiptNote_SAP,
});
const sequenceFlow26 = moddle.create("bpmn:SequenceFlow", {
  id: "flow26",
  sourceRef: GoodsReceiptNote_SAP,
  targetRef: BillSubmission_Projects,
});
const sequenceFlow27 = moddle.create("bpmn:SequenceFlow", {
  id: "flow27",
  sourceRef: SiteCodeCreation,
  targetRef: ApplyForBroadband,
});
const sequenceFlow28 = moddle.create("bpmn:SequenceFlow", {
  id: "flow28",
  sourceRef: HandOverToNSO,
  targetRef: Approval_HandoverFromProjects,
});

const sequenceFlow29 = moddle.create("bpmn:SequenceFlow", {
  id: "flow29",
  sourceRef: HandoverFromProjects,
  targetRef: PestControl,
});
const sequenceFlow30 = moddle.create("bpmn:SequenceFlow", {
  id: "flow28",
  sourceRef: Approval_HandoverFromRealEstate,
  targetRef: AppointHousekeepingAndSecurityAgency,
});
const sequenceFlow31 = moddle.create("bpmn:SequenceFlow", {
  id: "flow31",
  sourceRef: ITReadiness,
  targetRef: ITChecklist,
});
const sequenceFlow32 = moddle.create("bpmn:SequenceFlow", {
  id: "flow32",
  sourceRef: ITReadiness,
  targetRef: PlutusInstallation,
});

const sequenceFlow33 = moddle.create("bpmn:SequenceFlow", {
  id: "flow33",
  sourceRef: HandoverFromProjects,
  targetRef: CashPickAgency,
});

const sequenceFlow34 = moddle.create("bpmn:SequenceFlow", {
  id: "flow34",
  sourceRef: StocksDispatched,
  targetRef: Stocking,
});

const sequenceFlow35 = moddle.create("bpmn:SequenceFlow", {
  id: "flow35",
  sourceRef: Stocking,
  targetRef: PerishableItemsDeliveryConfirmation,
});

const sequenceFlow36 = moddle.create("bpmn:SequenceFlow", {
  id: "flow36",
  sourceRef: ITReadiness,
  targetRef: TestScan_POS,
});

const sequenceFlow37 = moddle.create("bpmn:SequenceFlow", {
  id: "flow37",
  sourceRef: PerishableItemsDeliveryConfirmation,
  targetRef: PerishableMerchandise_RecceivedAndDisplayed,
});

const sequenceFlow38 = moddle.create("bpmn:SequenceFlow", {
  id: "flow38",
  sourceRef: Stocking,
  targetRef: MerchandiseInstock95Plus,
});
const sequenceFlow39 = moddle.create("bpmn:SequenceFlow", {
  id: "flow39",
  sourceRef: MerchandiseInstock95Plus,
  targetRef: CheckBackupPlanforextrastocks,
});

const sequenceFlow40 = moddle.create("bpmn:SequenceFlow", {
  id: "flow40",
  sourceRef: HandoverFromProjects,
  targetRef: GatepassesInwardRegistersAndOtherDocuments,
});

const sequenceFlow41 = moddle.create("bpmn:SequenceFlow", {
  id: "flow41",
  sourceRef: Stocking,
  targetRef: SelsDisplayAndSignages,
});

const sequenceFlow42 = moddle.create("bpmn:SequenceFlow", {
  id: "flow42",
  sourceRef: HandoverFromProjects,
  targetRef: Licenses,
});

const sequenceFlow43 = moddle.create("bpmn:SequenceFlow", {
  id: "flow43",
  sourceRef: CheckBackupPlanforextrastocks,
  targetRef: HandoverToOperations,
});
const sequenceFlow44 = moddle.create("bpmn:SequenceFlow", {
  id: "flow44",
  sourceRef: ITChecklist,
  targetRef: InstallInStoreRadioAndDisplayPPL,
});
const sequenceFlow45 = moddle.create("bpmn:SequenceFlow", {
  id: "flow45",
  sourceRef: ApplyForBroadband,
  targetRef: BroadbandAvailable,
});

const sequenceFlow46 = moddle.create("bpmn:SequenceFlow", {
  id: "flow46",
  sourceRef: ProjectKickOfMeeting,
  targetRef: SiteSurvey,
});

const sequenceFlow47 = moddle.create("bpmn:SequenceFlow", {
  id: "flow47",
  sourceRef: CapExLoadedinSAP,
  targetRef: LinkFeasibility,
});

const sequenceFlow48 = moddle.create("bpmn:SequenceFlow", {
  id: "flow48",
  sourceRef: CapExLoadedinSAP,
  targetRef: BOQSubmission_IT,
});

const sequenceFlow49 = moddle.create("bpmn:SequenceFlow", {
  id: "flow49",
  sourceRef: BOQSubmission_IT,
  targetRef: STOPOAgainstBOQ,
});

const sequenceFlow50 = moddle.create("bpmn:SequenceFlow", {
  id: "flow50",
  sourceRef: STOPOAgainstBOQ,
  targetRef: MovementOfMaterialAgainstSTO,
});

const sequenceFlow51 = moddle.create("bpmn:SequenceFlow", {
  id: "flow51",
  sourceRef: LinkFeasibility,
  targetRef: LinkAvailability,
});
const sequenceFlow52 = moddle.create("bpmn:SequenceFlow", {
  id: "flow52",
  sourceRef: JointMeeting,
  targetRef: ConfirmLLScopeofWork,
});

const sequenceFlow53 = moddle.create("bpmn:SequenceFlow", {
  id: "flow53",
  sourceRef: ConfirmLLScopeofWork,
  targetRef: PrepareSiteSpecificCapEX,
});

const sequenceFlow54 = moddle.create("bpmn:SequenceFlow", {
  id: "flow54",
  sourceRef: PrepareSiteSpecificCapEX,
  targetRef: ApprovalCapex,
});

const sequenceFlow55 = moddle.create("bpmn:SequenceFlow", {
  id: "flow55",
  sourceRef: SiteCodeCreation,
  targetRef: ZonalAndHOLayoutSignOff,
});

const sequenceFlow56 = moddle.create("bpmn:SequenceFlow", {
  id: "flow56",
  sourceRef: ZonalAndHOLayoutSignOff,
  targetRef: LayoutsForFixtureBOQs,
});

const sequenceFlow57 = moddle.create("bpmn:SequenceFlow", {
  id: "flow57",
  sourceRef: ZonalAndHOLayoutSignOff,
  targetRef: LayoutsForGFCDrawingsAndBOQ,
});

const sequenceFlow58 = moddle.create("bpmn:SequenceFlow", {
  id: "flow58",
  sourceRef: LayoutsForGFCDrawingsAndBOQ,
  targetRef: HOLayoutReview,
});

const sequenceFlow59 = moddle.create("bpmn:SequenceFlow", {
  id: "flow59",
  sourceRef: ITChecklist,
  targetRef: InstallInStoreRadioAndDisplayPPL,
});

const sequenceFlow60 = moddle.create("bpmn:SequenceFlow", {
  id: "flow60",
  sourceRef: SiteCodeCreation,
  targetRef: CatchmentStudyMarketingPlan,
});

const sequenceFlow61 = moddle.create("bpmn:SequenceFlow", {
  id: "flow61",
  sourceRef: CatchmentStudyMarketingPlan,
  targetRef: Approval_CatchmentStudyAndMarketiingPlan,
});

const sequenceFlow62 = moddle.create("bpmn:SequenceFlow", {
  id: "flow62",
  sourceRef: SiteCodeCreation,
  targetRef: OnlineMarketingPlan,
});

const sequenceFlow63 = moddle.create("bpmn:SequenceFlow", {
  id: "flow63",
  sourceRef: OnlineMarketingPlan,
  targetRef: Approval_OnlineMarkrtingPlan,
});
const sequenceFlow64 = moddle.create("bpmn:SequenceFlow", {
  id: "flow64",
  sourceRef: ReleaseMarketingPO,
  targetRef: SignageOpeningSoon,
});
const sequenceFlow65 = moddle.create("bpmn:SequenceFlow", {
  id: "flow65",
  sourceRef: Approval_OnlineMarkrtingPlan,
  targetRef: StoreAddressUpdate,
});
const sequenceFlow66 = moddle.create("bpmn:SequenceFlow", {
  id: "flow66",
  sourceRef: Approval_CatchmentStudyAndMarketiingPlan,
  targetRef: MarketingPO,
});
const sequenceFlow67 = moddle.create("bpmn:SequenceFlow", {
  id: "flow67",
  sourceRef: ReleaseMarketingPO,
  targetRef: MarketingCollaterals,
});
const sequenceFlow68 = moddle.create("bpmn:SequenceFlow", {
  id: "flow68",
  sourceRef: SiteCodeCreation,
  targetRef: OnlineMarketingPlan,
});
const sequenceFlow69 = moddle.create("bpmn:SequenceFlow", {
  id: "flow69",
  sourceRef: BrandAwarenessCampaign,
  targetRef: OnlineBrandAwarenessAndLeadGeneration,
});
const sequenceFlow70 = moddle.create("bpmn:SequenceFlow", {
  id: "flow70",
  sourceRef: HandoverFromProjects,
  targetRef: CatchmentEngagement_CampaignSupportAndStoreLaunchActivities,
});
const sequenceFlow71 = moddle.create("bpmn:SequenceFlow", {
  id: "flow71",
  sourceRef: SiteCodeCreation,
  targetRef: StoreCodeRegistrationOnOneLoyalty,
});
const sequenceFlow72 = moddle.create("bpmn:SequenceFlow", {
  id: "flow72",
  sourceRef: MarketingCollaterals,
  targetRef: PreOpeningChecklist,
});
const sequenceFlow73 = moddle.create("bpmn:SequenceFlow", {
  id: "flow73",
  sourceRef: OJTAndFeedback_CSA,
  targetRef: ClassroomTraining_Membership,
});
const sequenceFlow74 = moddle.create("bpmn:SequenceFlow", {
  id: "flow74",
  sourceRef: MembershipDriveAssignResourcesAndTargets,
  targetRef: DTO_EnrolmentRegistration,
});
const sequenceFlow75 = moddle.create("bpmn:SequenceFlow", {
  id: "flow75",
  sourceRef: CapExLoadedinSAP,
  targetRef: AllocateVendorAndReleaseDesignPo,
});
const sequenceFlow76 = moddle.create("bpmn:SequenceFlow", {
  id: "flow76",
  sourceRef: AllocateVendorAndReleaseDesignPo,
  targetRef: SiteSurveyVMEstimate,
});
const sequenceFlow77 = moddle.create("bpmn:SequenceFlow", {
  id: "flow77",
  sourceRef: SiteSurveyVMEstimate,
  targetRef: VMDocketPrep_ZonalVM,
});
const sequenceFlow78 = moddle.create("bpmn:SequenceFlow", {
  id: "flow78",
  sourceRef: UpdateSiteDetails,
  targetRef: EscalatedBudgetApproval,
});
const sequenceFlow79 = moddle.create("bpmn:SequenceFlow", {
  id: "flow79",
  sourceRef: VMDocketPrep_ZonalVM,
  targetRef: Approval_VMDesignDocketHO,
});
const sequenceFlow80 = moddle.create("bpmn:SequenceFlow", {
  id: "flow80",
  sourceRef: Approval_VMDesignDocketHO,
  targetRef: VM_DocketAndPOReleased,
});
const sequenceFlow81 = moddle.create("bpmn:SequenceFlow", {
  id: "flow81",
  sourceRef: VM_DocketAndPOReleased,
  targetRef: BOQAndPOProcess,
});
const sequenceFlow82 = moddle.create("bpmn:SequenceFlow", {
  id: "flow82",
  sourceRef: LayoutsForFixtureBOQs,
  targetRef: BulkOrderVMArticleSupply,
});
const sequenceFlow83 = moddle.create("bpmn:SequenceFlow", {
  id: "flow83",
  sourceRef: BOQAndPOProcess,
  targetRef: MaterialDeliveryAndFacadeInstallation,
});
const sequenceFlow84 = moddle.create("bpmn:SequenceFlow", {
  id: "flow84",
  sourceRef: FixtureInstallation,
  targetRef: Installation_InstoreBranding,
});
const sequenceFlow85 = moddle.create("bpmn:SequenceFlow", {
  id: "flow85",
  sourceRef: SiteMeasurement_Projects,
  targetRef: MeasurementGNRAndBillSubmissionVM,
});
const sequenceFlow86 = moddle.create("bpmn:SequenceFlow", {
  id: "flow86",
  sourceRef: CapExLoadedinSAP,
  targetRef: CatchmentStudyRegionalBrands,
});
const sequenceFlow87 = moddle.create("bpmn:SequenceFlow", {
  id: "flow87",
  sourceRef: CatchmentStudyRegionalBrands,
  targetRef: FinalizeListingAndMappingOfAssortment,
});
const sequenceFlow88 = moddle.create("bpmn:SequenceFlow", {
  id: "flow88",
  sourceRef: FinalizeListingAndMappingOfAssortment,
  targetRef: BusinessHeadsApprovalOfStoreAssortment,
});

const sequenceFlow89 = moddle.create("bpmn:SequenceFlow", {
  id: "flow89",
  sourceRef: BusinessHeadsApprovalOfStoreAssortment,
  targetRef: ProvideFinalisedAssortmentToSupplyChain,
});
const sequenceFlow90 = moddle.create("bpmn:SequenceFlow", {
  id: "flow90",
  sourceRef: BusinessHeadsApprovalOfStoreAssortment,
  targetRef: PrepareModularMPMPlanInJDA,
});
const sequenceFlow91 = moddle.create("bpmn:SequenceFlow", {
  id: "flow91",
  sourceRef: PrepareModularMPMPlanInJDA,
  targetRef: ExecutionofModularMPMPlaninStore,
});
const sequenceFlow92 = moddle.create("bpmn:SequenceFlow", {
  id: "flow92",
  sourceRef: FinalizeListingAndMappingOfAssortment,
  targetRef: MBQUpdate,
});
const sequenceFlow93 = moddle.create("bpmn:SequenceFlow", {
  id: "flow93",
  sourceRef: MBQUpdate,
  targetRef: StockReadiness,
});
const sequenceFlow94 = moddle.create("bpmn:SequenceFlow", {
  id: "flow94",
  sourceRef: Installation,
  targetRef: StoreOpeningDateAnnouncement,
});
const sequenceFlow95 = moddle.create("bpmn:SequenceFlow", {
  id: "flow95",
  sourceRef: StoreOpeningDateAnnouncement,
  targetRef: StocksDispatched,
});
const sequenceFlow96 = moddle.create("bpmn:SequenceFlow", {
  id: "flow96",
  sourceRef: StoreOpeningDateAnnouncement,
  targetRef: DirectOrderingStore,
});

const sequenceFlow97 = moddle.create("bpmn:SequenceFlow", {
  id: "flow97",
  sourceRef: InitiateHiringProcess_CSA,
  targetRef: SourcingAndScreeningCVs_CSA,
});
const sequenceFlow98 = moddle.create("bpmn:SequenceFlow", {
  id: "flow98",
  sourceRef: InitiateHiringProcess_SK,
  targetRef: SourcingAndScreeningCVs_SK,
});
const sequenceFlow99 = moddle.create("bpmn:SequenceFlow", {
  id: "flow99",
  sourceRef: SourcingAndScreeningCVs_CSA,
  targetRef: InterviewAndFinalizeCandidates_CSA,
});
const sequenceFlow100 = moddle.create("bpmn:SequenceFlow", {
  id: "flow100",
  sourceRef: SourcingAndScreeningCVs_SK,
  targetRef: InterviewAndFinalizeCandidates_SK,
});
const sequenceFlow101 = moddle.create("bpmn:SequenceFlow", {
  id: "flow101",
  sourceRef: InterviewAndFinalizeCandidates_CSA,
  targetRef: IssueOfferLetter_CSA,
});

const sequenceFlow102 = moddle.create("bpmn:SequenceFlow", {
  id: "flow102",
  sourceRef: InterviewAndFinalizeCandidates_SK,
  targetRef: IssueOfferLetter_SK,
});
const sequenceFlow103 = moddle.create("bpmn:SequenceFlow", {
  id: "flow103",
  sourceRef: IssueOfferLetter_CSA,
  targetRef: Onboarding_CSA,
});
const sequenceFlow104 = moddle.create("bpmn:SequenceFlow", {
  id: "flow104",
  sourceRef: IssueOfferLetter_SK,
  targetRef: Onboarding_SK,
});
const sequenceFlow105 = moddle.create("bpmn:SequenceFlow", {
  id: "flow105",
  sourceRef: CRTAndOJT_PlanDateTrainerAndVenue_CSA,
  targetRef: CRTAndOJTCommunicateTrainingVenueToAPO_CSA,
});
const sequenceFlow106 = moddle.create("bpmn:SequenceFlow", {
  id: "flow106",
  sourceRef: CRTAndOJT_PlanDateTrainerAndVenue_SK,
  targetRef: CRTAndOJTCommunicateTrainingVenueToAPO_SK,
});
const sequenceFlow107 = moddle.create("bpmn:SequenceFlow", {
  id: "flow107",
  sourceRef: Onboarding_CSA,
  targetRef: OnboardingAcceptance_CSA,
});
const sequenceFlow108 = moddle.create("bpmn:SequenceFlow", {
  id: "flow108",
  sourceRef: Onboarding_SK,
  targetRef: OnboardingAcceptance_SK,
});
const sequenceFlow109 = moddle.create("bpmn:SequenceFlow", {
  id: "flow109",
  sourceRef: OnboardingAcceptance_CSA,
  targetRef: Induction_CRTDay1_CSA,
});
const sequenceFlow110 = moddle.create("bpmn:SequenceFlow", {
  id: "flow110",
  sourceRef: Induction_CRTDay1_CSA,
  targetRef: Induction_CRTDay2_CSA,
});
const sequenceFlow111 = moddle.create("bpmn:SequenceFlow", {
  id: "flow111",
  sourceRef: Induction_CRTDay2_CSA,
  targetRef: Induction_CRTDay3_CSA,
});
const sequenceFlow112 = moddle.create("bpmn:SequenceFlow", {
  id: "flow112",
  sourceRef: OnboardingAcceptance_SK,
  targetRef: Induction_CRTDay1_SK,
});
const sequenceFlow113 = moddle.create("bpmn:SequenceFlow", {
  id: "flow113",
  sourceRef: Induction_CRTDay1_SK,
  targetRef: Induction_CRTDay2_SK,
});
const sequenceFlow114 = moddle.create("bpmn:SequenceFlow", {
  id: "flow114",
  sourceRef: Induction_CRTDay2_SK,
  targetRef: Induction_CRTDay3_SK,
});
const sequenceFlow115 = moddle.create("bpmn:SequenceFlow", {
  id: "flow115",
  sourceRef: Induction_CRTDay3_CSA,
  targetRef: OJTAndFeedback_CSA,
});
const sequenceFlow116 = moddle.create("bpmn:SequenceFlow", {
  id: "flow116",
  sourceRef: Induction_CRTDay3_SK,
  targetRef: OJTAndFeedback_SK,
});
const sequenceFlow117 = moddle.create("bpmn:SequenceFlow", {
  id: "flow117",
  sourceRef: OJTAndFeedback_CSA,
  targetRef: CSAMembershipDrive,
});
const sequenceFlow118 = moddle.create("bpmn:SequenceFlow", {
  id: "flow118",
  sourceRef: OJTAndFeedback_SK,
  targetRef: SKMembershipDrive,
});
const sequenceFlow119 = moddle.create("bpmn:SequenceFlow", {
  id: "flow119",
  sourceRef: CSAMembershipDrive,
  targetRef: CSAAssessmentAndHandover,
});
const sequenceFlow120 = moddle.create("bpmn:SequenceFlow", {
  id: "flow120",
  sourceRef: SKMembershipDrive,
  targetRef: SKAssessmentAndHandover,
});
// Create parallel gateway for parallel dependencies
const parallelGateway1 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway1",
});

const sequenceFlow121 = moddle.create("bpmn:SequenceFlow", {
  id: "flow121",
  sourceRef: UpdateSiteDetails,
  targetRef: parallelGateway1,
});
const sequenceFlow122 = moddle.create("bpmn:SequenceFlow", {
  id: "flow122",
  sourceRef: LegalAgreement,
  targetRef: parallelGateway1,
});

const sequenceFlow123 = moddle.create("bpmn:SequenceFlow", {
  id: "flow123",
  sourceRef: JointMeeting,
  targetRef: parallelGateway1,
});

const sequenceFlow124 = moddle.create("bpmn:SequenceFlow", {
  id: "flow124",
  sourceRef: SecurityDeposite,
  targetRef: parallelGateway1,
});

const sequenceFlow125 = moddle.create("bpmn:SequenceFlow", {
  id: "flow125",
  sourceRef: ApplyForBroadband,
  targetRef: parallelGateway1,
});

const sequenceFlow126 = moddle.create("bpmn:SequenceFlow", {
  id: "flow126",
  sourceRef: ZonalAndHOLayoutSignOff,
  targetRef: parallelGateway1,
});

const sequenceFlow127 = moddle.create("bpmn:SequenceFlow", {
  id: "flow127",
  sourceRef: CatchmentStudyMarketingPlan,
  targetRef: parallelGateway1,
});

const sequenceFlow128 = moddle.create("bpmn:SequenceFlow", {
  id: "flow128",
  sourceRef: OnlineMarketingPlan,
  targetRef: parallelGateway1,
});
const sequenceFlow129 = moddle.create("bpmn:SequenceFlow", {
  id: "flow129",
  sourceRef: StoreCodeRegistrationOnOneLoyalty,
  targetRef: parallelGateway1,
});

const parallelGateway2 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway2",
});
const sequenceFlow130 = moddle.create("bpmn:SequenceFlow", {
  id: "flow130",
  sourceRef: LLScopeOfWorkTiling,
  targetRef: parallelGateway2,
});

const sequenceFlow131 = moddle.create("bpmn:SequenceFlow", {
  id: "flow131",
  sourceRef: LLScopeOfWorkWashroom,
  targetRef: parallelGateway2,
});

const sequenceFlow132 = moddle.create("bpmn:SequenceFlow", {
  id: "flow132",
  sourceRef: LLScopeOfWorkShutter,
  targetRef: parallelGateway2,
});

const sequenceFlow133 = moddle.create("bpmn:SequenceFlow", {
  id: "flow133",
  sourceRef: LLScopeOfWorkPOP,
  targetRef: parallelGateway2,
});

const sequenceFlow134 = moddle.create("bpmn:SequenceFlow", {
  id: "flow134",
  sourceRef: LLScopeOfWorkPainting,
  targetRef: parallelGateway2,
});

const sequenceFlow135 = moddle.create("bpmn:SequenceFlow", {
  id: "flow135",
  sourceRef: LLScopeOfWorkGlazing,
  targetRef: parallelGateway2,
});

const sequenceFlow136 = moddle.create("bpmn:SequenceFlow", {
  id: "flow136",
  sourceRef: LLScopeOfWorkPower,
  targetRef: parallelGateway2,
});

const sequenceFlow137 = moddle.create("bpmn:SequenceFlow", {
  id: "flow137",
  sourceRef: LLScopeOfWorkExternalDevelopment,
  targetRef: parallelGateway2,
});

const sequenceFlow138 = moddle.create("bpmn:SequenceFlow", {
  id: "flow138",
  sourceRef: ConfirmLLScopeofWork,
  targetRef: parallelGateway2,
});

const parallelGateway3 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway3",
});

const sequenceFlow139 = moddle.create("bpmn:SequenceFlow", {
  id: "flow139",
  sourceRef: ProjectsScopeOfWork_Civil,
  targetRef: parallelGateway3,
});
const sequenceFlow140 = moddle.create("bpmn:SequenceFlow", {
  id: "flow140",
  sourceRef: ProjectsScopeOfWork_Electrical,
  targetRef: parallelGateway3,
});
const sequenceFlow141 = moddle.create("bpmn:SequenceFlow", {
  id: "flow141",
  sourceRef: ProjectsScopeOfWork_HVAC,
  targetRef: parallelGateway3,
});
const sequenceFlow142 = moddle.create("bpmn:SequenceFlow", {
  id: "flow142",
  sourceRef: ProjectsScopeOfWork_FixturingAndITReadiness,
  targetRef: parallelGateway3,
});
const sequenceFlow143 = moddle.create("bpmn:SequenceFlow", {
  id: "flow143",
  sourceRef: LLScopeOfWorkExternalDevelopment,
  targetRef: parallelGateway3,
});

const parallelGateway4 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway4",
});

const sequenceFlow144 = moddle.create("bpmn:SequenceFlow", {
  id: "flow144",
  sourceRef: SiteMeasurement_Projects,
  targetRef: parallelGateway4,
});

const sequenceFlow145 = moddle.create("bpmn:SequenceFlow", {
  id: "flow145",
  sourceRef: PestControl,
  targetRef: parallelGateway4,
});
const sequenceFlow146 = moddle.create("bpmn:SequenceFlow", {
  id: "flow146",
  sourceRef: CashPickAgency,
  targetRef: parallelGateway4,
});
const sequenceFlow147 = moddle.create("bpmn:SequenceFlow", {
  id: "flow147",
  sourceRef: GatepassesInwardRegistersAndOtherDocuments,
  targetRef: parallelGateway4,
});
const sequenceFlow148 = moddle.create("bpmn:SequenceFlow", {
  id: "flow148",
  sourceRef: Licenses,
  targetRef: parallelGateway4,
});
const sequenceFlow149 = moddle.create("bpmn:SequenceFlow", {
  id: "flow149",
  sourceRef: CatchmentEngagement_CampaignSupportAndStoreLaunchActivities,
  targetRef: parallelGateway4,
});
//Fixture Installation
const parallelGateway5 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway5",
});

const sequenceFlow150 = moddle.create("bpmn:SequenceFlow", {
  id: "flow150",
  sourceRef: Installation,
  targetRef: parallelGateway5,
});

const sequenceFlow151 = moddle.create("bpmn:SequenceFlow", {
  id: "flow151",
  sourceRef: Installation_InstoreBranding,
  targetRef: parallelGateway5,
});
//Installation
const parallelGateway6 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway6",
});

const sequenceFlow152 = moddle.create("bpmn:SequenceFlow", {
  id: "flow152",
  sourceRef: HandOverToNSO,
  targetRef: parallelGateway6,
});
const sequenceFlow153 = moddle.create("bpmn:SequenceFlow", {
  id: "flow153",
  sourceRef: StoreOpeningDateAnnouncement,
  targetRef: parallelGateway6,
});
//Site Measurement
const parallelGateway7 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway7",
});
const sequenceFlow154 = moddle.create("bpmn:SequenceFlow", {
  id: "flow154",
  sourceRef: GoodsReceiptNote_SAP,
  targetRef: parallelGateway7,
});
const sequenceFlow155 = moddle.create("bpmn:SequenceFlow", {
  id: "flow155",
  sourceRef: MeasurementGNRAndBillSubmissionVM,
  targetRef: parallelGateway7,
});
//IT Readiness
const parallelGateway8 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway8",
});
const sequenceFlow156 = moddle.create("bpmn:SequenceFlow", {
  id: "flow156",
  sourceRef: ITChecklist,
  targetRef: parallelGateway8,
});
const sequenceFlow157 = moddle.create("bpmn:SequenceFlow", {
  id: "flow157",
  sourceRef: PlutusInstallation,
  targetRef: parallelGateway8,
});
const sequenceFlow158 = moddle.create("bpmn:SequenceFlow", {
  id: "flow158",
  sourceRef: TestScan_POS,
  targetRef: parallelGateway7,
});
const parallelGateway9 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway9",
});

const sequenceFlow159 = moddle.create("bpmn:SequenceFlow", {
  id: "flow159",
  sourceRef: PerishableItemsDeliveryConfirmation,
  targetRef: parallelGateway9,
});
const sequenceFlow160 = moddle.create("bpmn:SequenceFlow", {
  id: "flow160",
  sourceRef: MerchandiseInstock95Plus,
  targetRef: parallelGateway9,
});

const sequenceFlow161 = moddle.create("bpmn:SequenceFlow", {
  id: "flow161",
  sourceRef: SelsDisplayAndSignages,
  targetRef: parallelGateway9,
});
//project kick off meeting
const parallelGateway10 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway10",
});
const sequenceFlow162 = moddle.create("bpmn:SequenceFlow", {
  id: "flow162",
  sourceRef: MaterialAndManpowerMovement,
  targetRef: parallelGateway10,
});
const sequenceFlow163 = moddle.create("bpmn:SequenceFlow", {
  id: "flow163",
  sourceRef: SiteSurvey,
  targetRef: parallelGateway10,
});
//CapEX Loaded in SAP
const parallelGateway11 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway11",
});

const sequenceFlow164 = moddle.create("bpmn:SequenceFlow", {
  id: "flow164",
  sourceRef: LinkFeasibility,
  targetRef: parallelGateway11,
});
const sequenceFlow165 = moddle.create("bpmn:SequenceFlow", {
  id: "flow165",
  sourceRef: BOQSubmission_IT,
  targetRef: parallelGateway11,
});
const sequenceFlow166 = moddle.create("bpmn:SequenceFlow", {
  id: "flow166",
  sourceRef: AllocateVendorAndReleaseDesignPo,
  targetRef: parallelGateway11,
});
const sequenceFlow167 = moddle.create("bpmn:SequenceFlow", {
  id: "flow167",
  sourceRef: CatchmentStudyRegionalBrands,
  targetRef: parallelGateway11,
});
//Zonal And HO Layout SIGN OFF
const parallelGateway12 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway12",
});

const sequenceFlow168 = moddle.create("bpmn:SequenceFlow", {
  id: "flow168",
  sourceRef: LayoutsForFixtureBOQs,
  targetRef: parallelGateway12,
});
const sequenceFlow169 = moddle.create("bpmn:SequenceFlow", {
  id: "flow167",
  sourceRef: LayoutsForGFCDrawingsAndBOQ,
  targetRef: parallelGateway12,
});

//release marketing po

const parallelGateway13 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway13",
});

const sequenceFlow170 = moddle.create("bpmn:SequenceFlow", {
  id: "flow170",
  sourceRef: SignageOpeningSoon,
  targetRef: parallelGateway13,
});

const sequenceFlow171 = moddle.create("bpmn:SequenceFlow", {
  id: "flow171",
  sourceRef: MarketingCollaterals,
  targetRef: parallelGateway13,
});

// membership drive assign

const parallelGateway14 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway14",
});

const sequenceFlow172 = moddle.create("bpmn:SequenceFlow", {
  id: "flow172",
  sourceRef: BrandAwarenessCampaign,
  targetRef: parallelGateway14,
});

const sequenceFlow173 = moddle.create("bpmn:SequenceFlow", {
  id: "flow173",
  sourceRef: DTO_EnrolmentRegistration,
  targetRef: parallelGateway14,
});

// business heads approval of

const parallelGateway15 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway15",
});

const sequenceFlow174 = moddle.create("bpmn:SequenceFlow", {
  id: "flow174",
  sourceRef: ProvideFinalisedAssortmentToSupplyChain,
  targetRef: parallelGateway15,
});

const sequenceFlow175 = moddle.create("bpmn:SequenceFlow", {
  id: "flow175",
  sourceRef: PrepareModularMPMPlanInJDA,
  targetRef: parallelGateway15,
});

// store opening date-a

const parallelGateway16 = moddle.create("bpmn:ParallelGateway", {
  id: "parallelGateway16",
});

const sequenceFlow176 = moddle.create("bpmn:SequenceFlow", {
  id: "flow176",
  sourceRef: StocksDispatched,
  targetRef: parallelGateway16,
});

const sequenceFlow177 = moddle.create("bpmn:SequenceFlow", {
  id: "flow177",
  sourceRef: DirectOrderingStore,
  targetRef: parallelGateway16,
});

// Create sequence flows for multiple dependencies
//HandoverToProjects
const sequenceFlow178 = moddle.create("bpmn:SequenceFlow", {
  id: "flow178",
  sourceRef: LLScopeOfWorkExternalDevelopment,
  targetRef: HandoverToProjects,
});
const sequenceFlow179 = moddle.create("bpmn:SequenceFlow", {
  id: "flow179",
  sourceRef: LLScopeOfWorkTiling,
  targetRef: HandoverToProjects,
});
const sequenceFlow180 = moddle.create("bpmn:SequenceFlow", {
  id: "flow180",
  sourceRef: LLScopeOfWorkWashroom,
  targetRef: HandoverToProjects,
});

const sequenceFlow181 = moddle.create("bpmn:SequenceFlow", {
  id: "flow181",
  sourceRef: LLScopeOfWorkShutter,
  targetRef: HandoverToProjects,
});
const sequenceFlow182 = moddle.create("bpmn:SequenceFlow", {
  id: "flow182",
  sourceRef: LLScopeOfWorkPOP,
  targetRef: HandoverToProjects,
});
const sequenceFlow183 = moddle.create("bpmn:SequenceFlow", {
  id: "flow183",
  sourceRef: LLScopeOfWorkPainting,
  targetRef: HandoverToProjects,
});
const sequenceFlow184 = moddle.create("bpmn:SequenceFlow", {
  id: "flow184",
  sourceRef: LLScopeOfWorkGlazing,
  targetRef: HandoverToProjects,
});
//ProjectKickOfMeeting
const sequenceFlow185 = moddle.create("bpmn:SequenceFlow", {
  id: "flow185",
  sourceRef: LLScopeOfWorkTiling,
  targetRef: ProjectKickOfMeeting,
});
const sequenceFlow186 = moddle.create("bpmn:SequenceFlow", {
  id: "flow186",
  sourceRef: LLScopeOfWorkWashroom,
  targetRef: ProjectKickOfMeeting,
});

const process = moddle.create("bpmn:Process", { id: "MyProcess" });
//process.get('flowElements').push

process
  .get("flowElements")
  .push(
    SiteCodeCreation,
    UpdateSiteDetails,
    LegalAgreement,
    JointMeeting,
    SecurityDeposite,
    LLScopeOfWorkTiling,
    LLScopeOfWorkWashroom,
    LLScopeOfWorkShutter,
    LLScopeOfWorkPOP,
    LLScopeOfWorkPainting,
    LLScopeOfWorkGlazing,
    LLScopeOfWorkPower,
    LLScopeOfWorkExternalDevelopment,
    HandoverToProjects,
    Approval_HandoverFromRealEstate,
    ProjectKickOfMeeting,
    MaterialAndManpowerMovement,
    ProjectsScopeOfWork_Civil,
    ProjectsScopeOfWork_Electrical,
    ProjectsScopeOfWork_HVAC,
    ProjectsScopeOfWork_FixturingAndITReadiness,
    FixtureInstallation,
    sequenceFlow1,
    sequenceFlow2,
    sequenceFlow3,
    sequenceFlow4,
    sequenceFlow5,
    sequenceFlow6,
    sequenceFlow7,
    sequenceFlow8,
    sequenceFlow9,
    sequenceFlow10,
    sequenceFlow11,
    sequenceFlow12,
    sequenceFlow13,
    sequenceFlow14,
    sequenceFlow15,
    sequenceFlow16,
    sequenceFlow17,
    sequenceFlow18,
    sequenceFlow19,
    sequenceFlow20,
    sequenceFlow21,
    sequenceFlow22,
    sequenceFlow23,
    sequenceFlow24,
    sequenceFlow25,
    sequenceFlow26,
    sequenceFlow27,
    sequenceFlow28,
    sequenceFlow29,
    sequenceFlow30,
    sequenceFlow31,
    sequenceFlow32,
    sequenceFlow33,
    sequenceFlow34,
    sequenceFlow35,
    sequenceFlow36,
    sequenceFlow36,
    sequenceFlow37,
    sequenceFlow38,
    sequenceFlow39,
    sequenceFlow40,
    sequenceFlow41,
    sequenceFlow42,
    sequenceFlow43,
    sequenceFlow44,
    sequenceFlow45,
    sequenceFlow46,
    sequenceFlow47,
    sequenceFlow48,
    sequenceFlow49,
    sequenceFlow50,
    sequenceFlow51,
    sequenceFlow52,
    sequenceFlow53,
    sequenceFlow54,
    sequenceFlow55,
    sequenceFlow56,
    sequenceFlow57,
    sequenceFlow58,
    sequenceFlow59,
    sequenceFlow60,
    sequenceFlow61,
    sequenceFlow62,
    sequenceFlow63,
    sequenceFlow64,
    sequenceFlow65,
    sequenceFlow66,
    sequenceFlow67,
    sequenceFlow67,
    sequenceFlow68,
    sequenceFlow69,
    sequenceFlow70,
    sequenceFlow71,
    sequenceFlow72,
    sequenceFlow73,
    sequenceFlow74,
    sequenceFlow75,
    sequenceFlow76,
    sequenceFlow77,
    sequenceFlow78,
    sequenceFlow79,
    sequenceFlow80,
    sequenceFlow81,
    sequenceFlow82,
    sequenceFlow83,
    sequenceFlow84,
    sequenceFlow85,
    sequenceFlow86,
    sequenceFlow87,
    sequenceFlow88,
    sequenceFlow89,
    sequenceFlow90,
    sequenceFlow91,
    sequenceFlow92,
    sequenceFlow93,
    sequenceFlow94,
    sequenceFlow95,
    sequenceFlow96,
    sequenceFlow97,
    sequenceFlow98,
    sequenceFlow99,
    sequenceFlow100,
    sequenceFlow101,
    sequenceFlow102,
    sequenceFlow103,
    sequenceFlow104,
    sequenceFlow105,
    sequenceFlow106,
    sequenceFlow107,
    sequenceFlow108,
    sequenceFlow109,
    sequenceFlow110,
    sequenceFlow111,
    sequenceFlow112,
    sequenceFlow113,
    sequenceFlow114,
    sequenceFlow115,
    sequenceFlow116,
    sequenceFlow117,
    sequenceFlow118,
    sequenceFlow119,
    sequenceFlow120,
    sequenceFlow121,
    sequenceFlow122,
    sequenceFlow123,
    sequenceFlow124,
    sequenceFlow125,
    sequenceFlow126,
    sequenceFlow127,
    sequenceFlow128,
    sequenceFlow129,
    sequenceFlow130,
    sequenceFlow131,
    sequenceFlow132,
    sequenceFlow133,
    sequenceFlow134,
    sequenceFlow135,
    sequenceFlow136,
    sequenceFlow137,
    sequenceFlow138,
    sequenceFlow139,
    sequenceFlow140,
    sequenceFlow141,
    sequenceFlow142,
    sequenceFlow143,
    sequenceFlow144,
    sequenceFlow145,
    sequenceFlow146,
    sequenceFlow147,
    sequenceFlow148,
    sequenceFlow149,
    sequenceFlow150,
    sequenceFlow151,
    sequenceFlow152,
    sequenceFlow153,
    sequenceFlow154,
    sequenceFlow155,
    sequenceFlow156,
    sequenceFlow157,
    sequenceFlow158,
    sequenceFlow159,
    sequenceFlow160,
    sequenceFlow161,
    sequenceFlow162,
    sequenceFlow163,
    sequenceFlow164,
    sequenceFlow165,
    sequenceFlow166,
    sequenceFlow167,
    sequenceFlow168,
    sequenceFlow169,
    sequenceFlow170,
    sequenceFlow171,
    sequenceFlow172,
    sequenceFlow173,
    sequenceFlow174,
    sequenceFlow175,
    sequenceFlow176,
    sequenceFlow177,
    sequenceFlow178,
    sequenceFlow179,
    sequenceFlow180,
    sequenceFlow181,
    sequenceFlow182,
    sequenceFlow183,
    sequenceFlow184,
    sequenceFlow185,
    sequenceFlow186
  );

const definitions = moddle.create("bpmn:Definitions", {
  targetNamespace: "http://bpmn.io/schema/bpmn",
  id: "definitions",
  rootElements: [process],
});

const xmlStr = moddle.toXML(definitions).then((xmlStr) => {
  fs.writeFileSync("bpmn-AssignmentComplete.xml", JSON.stringify(xmlStr));
  console.log("The file has been saved!");
});
