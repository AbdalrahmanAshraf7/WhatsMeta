import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider ,Navigate  } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'
import Layout from "./comp/Layout/Layout.jsx"
import Home from "./comp/Home/Home.jsx"
import Services from './comp/Services/Services.jsx'
import Docs from "./comp/Docs/Docs.jsx"
import DocsLayout from './comp/DocsLayout/DocsLayout.jsx'
import Welcome from "./comp/DocsComp/Welcome/Welcome.jsx"
import Crm from './comp/DocsComp/Crm/Crm.jsx'
import MessagingChannels from './comp/DocsComp/MessagingChannels/MessagingChannels.jsx'
import PlatformOverview from './comp/DocsComp/PlatformOverview/PlatformOverview.jsx'
import CustomField from "./comp/DocsComp/Crm/CustomField/CustomField.jsx"
import HowCreate from "./comp/DocsComp/Crm/CustomField/HowCreate.jsx"
import HowCreateSuper from "./comp/DocsComp/Crm/CustomField/HowCreateSuper.jsx"
import Contacts from "./comp/DocsComp/Crm/contacts/Contacts.jsx"
import Conditions from "./comp/DocsComp/Crm/contacts/Conditions.jsx"
import ExportContacts from "./comp/DocsComp/Crm/contacts/ExportContacts.jsx"
import ImportContacts from "./comp/DocsComp/Crm/contacts/ImportContacts.jsx"
import UpdateCustom from "./comp/DocsComp/Crm/contacts/UpdateCustom.jsx"
import Segment from "./comp/DocsComp/Crm/Segment.jsx"
import CrmTriggers from "./comp/DocsComp/Crm/CrmTriggers.jsx"
import BulkMessageCatalogue from "./comp/DocsComp/Crm/Campaigns/BulkMessageCatalogue.jsx"
import Campaigns from "./comp/DocsComp/Crm/Campaigns/Campaigns.jsx"
import GettingFailed from "./comp/DocsComp/Crm/Campaigns/GettingFailed.jsx"
import HideBulkCampaign from "./comp/DocsComp/Crm/Campaigns/HideBulkCampaign.jsx"
import MultiProductMessage from "./comp/DocsComp/Crm/Campaigns/MultiProductMessage.jsx"
import SendBulkCampaigns from "./comp/DocsComp/Crm/Campaigns/SendBulkCampaigns.jsx"
import SendBulkMessages from "./comp/DocsComp/Crm/Campaigns/SendBulkMessages.jsx"
import SendBulkMessagesLTO from "./comp/DocsComp/Crm/Campaigns/SendBulkMessagesLTO.jsx"
import SendBulkWhatsAppCampaigns from "./comp/DocsComp/Crm/Campaigns/SendBulkWhatsAppCampaigns.jsx"
import SendCarouselTemplate from "./comp/DocsComp/Crm/Campaigns/SendCarouselTemplate .jsx"
import StopUsers from "./comp/DocsComp/Crm/Campaigns/StopUsers.jsx"
import UseAPICampaigns from "./comp/DocsComp/Crm/Campaigns/UseAPICampaigns.jsx"







function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index : true , element: <Navigate to="home" replace />},
        { path : "home" , element: <Home/> },
        { path : "services" , element: <Services/> },
        // { path : "docs" , element: <Docs/> },
      ],
      
    },
    {
      path:"docs",
      element:<DocsLayout></DocsLayout>,
      children:[
        { path: "welcome", element: <Welcome></Welcome> },
        { path: "platformoverview", element: <PlatformOverview/>},
        { path: "messages", element: <MessagingChannels></MessagingChannels>},
        { path: "crm", element: <Crm></Crm> },
        { path: "customfield", element: <CustomField></CustomField> },
        { path: "howcreate", element: <HowCreate></HowCreate> },
        { path: "howcreatesuper", element: <HowCreateSuper></HowCreateSuper> },
        { path: "Contacts", element: <Contacts></Contacts> },
        { path: "Conditions", element: <Conditions></Conditions>    },
        { path: "ExportContacts", element: <ExportContacts></ExportContacts> },
        { path: "ImportContacts", element: <ImportContacts></ImportContacts> },
        { path: "UpdateCustom", element: <UpdateCustom></UpdateCustom> },
        { path: "Segment", element: <Segment></Segment> },
        { path: "CrmTriggers", element: <CrmTriggers></CrmTriggers> },
        { path: "BulkMessageCatalogue", element: <BulkMessageCatalogue></BulkMessageCatalogue> },
        { path: "Campaigns", element: <Campaigns></Campaigns> },
        { path: "GettingFailed", element: <GettingFailed></GettingFailed> },
        { path: "HideBulkCampaign", element: <HideBulkCampaign></HideBulkCampaign> },
        { path: "MultiProductMessage", element: <MultiProductMessage></MultiProductMessage> },
        { path: "SendBulkCampaigns", element: <SendBulkCampaigns></SendBulkCampaigns> },
        { path: "SendBulkMessages", element: <SendBulkMessages></SendBulkMessages> },
        { path: "SendBulkMessagesLTO", element: <SendBulkMessagesLTO></SendBulkMessagesLTO> },
        { path: "SendBulkWhatsAppCampaigns", element: <SendBulkWhatsAppCampaigns></SendBulkWhatsAppCampaigns> },
        { path: "SendCarouselTemplate", element: <SendCarouselTemplate></SendCarouselTemplate> },
        { path: "StopUsers", element: <StopUsers></StopUsers> },
        { path: "UseAPICampaigns", element: <UseAPICampaigns></UseAPICampaigns> },

      ]
    }
  ])

  const queryClient = new QueryClient()



  




  



  

  return <>
 



<QueryClientProvider client={queryClient}>

  <RouterProvider router={router} />

  </QueryClientProvider>
  
  
  </>
}

export default App
