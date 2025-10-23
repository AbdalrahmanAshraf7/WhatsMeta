
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function SideDocBar() {
    const [openSections, setOpenSections] = useState({});
    const [sideToggle, setSideToggle] = useState(true)
    const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return <>


  <div>
    <button onClick={()=>setSideToggle(!sideToggle)}    data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"  aria-controls="default-sidebar" type="button" className=" cursor-pointer md:hidden  inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
    <span className="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
    
  </button>
  <aside id="default-sidebar" className={` h-screen p-1 top-0 left-0 z-40 w-full md:w-80  transition-transform bg-gray-50 dark:bg-gray-800 md:translate-x-0 ${sideToggle ? "translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
    <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium text-gray-600">
        <li>
            <div className='flex items-center justify-between'>
                <div>
                     <i class="fa-solid fa-book text-black"></i>
                     <span className="ms-3  text-black">User Documentation</span>
                </div>
                {/* <div className='border-1 border-gray-400 p-2 rounded-md flex justify-center items-center cursor-pointer' onClick={()=>setSideToggle(false)}>
                    <i class="fa-solid fa-bars text-gray-400" ></i>
                </div> */}
               
            </div>
        </li>
        <div className='h-[1px] bg-gray-200'>
        </div>

        <NavLink to={"welcome"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
            <div className='ms-3 cursor-pointer hover:bg-gray-300 p-1 rounded-md  '>
                Welcome
            </div>
        </NavLink>

        <NavLink to={"platformoverview"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
            <div className='ms-3 mt-2 cursor-pointer hover:bg-gray-300 p-1 rounded-md '>
            Platform Overview
            </div>
        </NavLink >


            <div className=' mt-2 cursor-pointer  p-1 rounded-md'>
            <NavLink to={"messages"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>

            <li className='hover:bg-gray-300 p-1 rounded-md'  onClick={()=>toggleSection("Messaging")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap ">Messaging Channels</span>
            </div>
            </li>
            </NavLink>

            <div className={`ms-7 mt-3 ${openSections["Messaging"] ? "" : "hidden"}`}>
                <NavLink to={"WhatsAPPApi"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                    <li  onClick={()=>toggleSection("WhatsAPPApi")}>
                      WhatsApp Api
                     </li>
                </NavLink>
                <div className='ms-8'>
                    <NavLink to={"GettingStarted"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                    <li className={` mt-5 ${openSections["WhatsAPPApi"] ? "" : "hidden"}`} onClick={()=>toggleSection("GettingStarted")}> 
                        Getting Started With WhatsApp API
                    </li >
                    </NavLink>
                    <div className={` mt-5 ms-5 ${openSections["GettingStarted"] ? "" : "hidden"}`} >
                      <NavLink to={"NewNumber"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3 '>
                            Register a New Number
                        </li >
                        </NavLink>
                        <NavLink to={"MigrateNumber"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3 '>
                            Migrate an Existing Number
                        </li>
                        </NavLink>
                       <NavLink to={"MigrationStuck"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3 '>
                            Migration Stuck In Between Or Getting Permissions Error
                        </li>
                        </NavLink>
                        <NavLink to={"ChangeWhatsAppName"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3 '>
                            Change WhatsApp Display Name ?
                        </li>
                        </NavLink>
                        <NavLink to={"FacebookBusinessVerification"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3 '> 
                           How To Apply For Facebook Business Verification ?
                        </li>
                        </NavLink>
                    </div>

                    <NavLink to={"ManagingyouWhatsAppAPI"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                    <li className={` mt-5 ${openSections["WhatsAPPApi"] ? "" : "hidden"}`} onClick={()=>toggleSection("ManagingyourWhatsAppAPI")}>
                        Managing your WhatsApp API
                    </li>
                    </NavLink>

                    <div  className={`ms-5 mt-3 ${openSections["ManagingyourWhatsAppAPI"] ? "" : "hidden"}`} >
                      <NavLink to={"UpdateBusinessProfile"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                            How To Update Business Profile And Display Picture Of Your WhatsApp API Number ?
                        </li>
                        </NavLink>

                     <NavLink to={"SendMessagesViaAPI"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Send Messages Via API For your Official WhatsApp Number ( Postman ) ?
                        </li>
                    </NavLink>

                     <NavLink to={"SetWebhookUrl"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Set Webhook Url to Receive Delivery Reports / Message Statues From Meta For Your WhatsApp API
                        </li>
                        </NavLink>

                       <NavLink to={"HowToCreateQrCode"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How To Create Qr Code For Your WhatsApp API Number ?
                        </li>
                        </NavLink>

                        <NavLink to={"a2faForYourWhatsApp"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How To Set 2fa For Your WhatsApp Channel ?
                        </li>
                        </NavLink>

                        <NavLink to={"SendTestMessages"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Send Test Messages And find out why messages are not delivering for WhatsApp API Channel ?
                        </li>
                        </NavLink>

                        <NavLink to={"HowToCreateCommands"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How To Create Commands On WhatsApp Or Predefined Menu Or Quick Access Menu ?
                        </li>
                        </NavLink>

                         <NavLink to={"HowToRequestIncrease"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How To Request Increase For WhatsApp Phone Number Limit For Meta Business Manager ?
                        </li>
                        </NavLink>
                         
                        <NavLink to={"HowToApplyForGreenTick"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                          How To Apply For Green Tick In WhatsApp ?
                        </li>
                        </NavLink>

                        <NavLink to={"HowToBulkCloneWhatsAppTemplates"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Bulk Clone WhatsApp Templates Between Different WhatsApp API Numbers ?
                        </li>
                        </NavLink>

                        <NavLink to={"AccountQuality"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           Account Quality
                        </li>
                        </NavLink>

                        <NavLink to={"MessagingLimits"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           Messaging Limits
                        </li>
                        </NavLink>

                        <NavLink to={"CreateIceBreakers"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Create Ice Breakers For WhatsApp API ?
                        </li>
                        </NavLink>

                         <NavLink to={"SendWelcomeMessagetoUsersOnFirstTimeOpening"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
                        <li className='mt-3'>
                           How to Send Welcome Message to Users On First Time Opening your WhatsApp Number ?
                        </li>
                        </NavLink>

                        
                    </div>

                </div>
            </div>
            <div className={`ms-7 mt-3 ${openSections["Messaging"] ? "" : "hidden"}`}>
                <li  onClick={()=>toggleSection("Facebook")}>
                Facebook Page
                </li>
                <div className='ms-8'>
                    <li className={` mt-5 ${openSections["Facebook"] ? "" : "hidden"}`}> 
                        Connect a Facebook Page
                    </li >
                    <li className={` mt-5 ${openSections["Facebook"] ? "" : "hidden"}`}>
                        How To Create A Facebook Comment Bot or Automation ?
                    </li>
                    <li className={` mt-5 ${openSections["Facebook"] ? "" : "hidden"}`}>
                        How to Create Chat Bot for your Facebook Page ?
                    </li>

                </div>
            </div>
           
        </div>

        
            <div className=' mt-2 cursor-pointer  p-1 rounded-md'>
            <NavLink to={"crm"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold       '>
                <li  onClick={()=>toggleSection("Crm")}>
            <div className='hover:bg-gray-300 p-1 rounded-md'>
                <span className="flex-1 ms-3 whitespace-nowrap">CRM</span>
            </div>
            </li>
            </NavLink>
            <div className={`ms-7 mt-3 ${openSections["Crm"] ? "" : "hidden"}`}>
                <NavLink to={"customfield"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold `} onClick={()=>toggleSection("CustomFields")}>
                Custom Fields
                </NavLink>
                <div className='ms-8'>
                    <NavLink to={"howcreate"}  className={` aria-[current=page]:text-green-700 aria-[current=page]:font-bold mt-5 ${openSections["CustomFields"] ? "" : "hidden"}`}> 
                        <li  className='mt-5'>
                        How to create a Custom Field?
                        </li>
                    </NavLink  >
                    <NavLink to={"howcreatesuper"}  className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5 ${openSections["CustomFields"] ? "" : "hidden"}`}> 
                        <li className='mt-5'>
                            How to Create Super Fields In CRM ?
                        </li>
                    </NavLink  >
                    

                </div>
            </div>
            <div className={`ms-7 mt-3 ${openSections["Crm"] ? "" : "hidden"}`}>
                <NavLink to={"Contacts"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                <li  onClick={()=>toggleSection("Contacts")} >
                Contacts
                </li>
                </NavLink>
                <div className='ms-8'>
                    <NavLink to={"UpdateCustom"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                        <li className={` mt-5 ${openSections["Contacts"] ? "" : "hidden"}`}> 
                        How to Update Custom Fields in Bulk ?
                    </li >
                    </NavLink>

                    <NavLink to={"ImportContacts"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Contacts"] ? "" : "hidden"}`}> 
                        How To Import Contacts And Send Bulk Messages To Users ?
                    </li >
                    </NavLink>

                    <NavLink to={"ExportContacts"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Contacts"] ? "" : "hidden"}`}> 
                        How To Export Contacts From CRM With Custom Fields ?
                    </li >
                    </NavLink>

                    <NavLink to={"Conditions"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Contacts"] ? "" : "hidden"}`}> 
                        Difference Between Conditions: “is”, “is not “, “exists” and “does not exist”
                    </li >
                    </NavLink>

                </div>
            </div>
            <div className={`ms-7 mt-3 ${openSections["Crm"] ? "" : "hidden"}`}>
                <NavLink to={"Segment"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li>
                Segments
                </li>
                </NavLink>
            </div>
            <div className={`ms-7 mt-3 ${openSections["Crm"] ? "" : "hidden"}`}>
                <NavLink  to={"Campaigns"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`}>
                    <li  onClick={()=>toggleSection("Campaigns")}>
                Campaigns
                </li>
                </NavLink>
                <div className='ms-8'>
                    <NavLink  to={"GettingFailed"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                        <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How To Check Why Messages Are Getting Failed In Broadcasts / Campaigns ?
                      </li >
                    </NavLink>

                    <NavLink  to={"HideBulkCampaign"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How To Send Bulk Messages To Users?
                    </li >
                     </NavLink>
                     <NavLink  to={"MultiProductMessage"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to hide bulk campaign / broadcasts msgs from Inbox ?
                    </li >
                    </NavLink>
                    <NavLink  to={"SendBulkCampaigns"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to Send Carousel Template Messages In Bulk on WhatsApp ?
                    </li >
                    </NavLink>

                    <NavLink  to={"SendBulkMessages"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to send Bulk Messages Of LTO (limited time offer) Coupon Code Template ?
                    </li >
                    </NavLink>
                    <NavLink  to={"SendBulkMessagesLTO"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to Send Bulk Messages Of a Catalogue Template ?
                    </li >
                    </NavLink>
                    <NavLink  to={"SendBulkWhatsAppCampaigns"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to Opt-out Users / Stop Users from receiving Bulk msgs?
                    </li >
                    </NavLink>
                    <NavLink  to={"SendCarouselTemplate"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How to Send Bulk WhatsApp Campaigns To Millions Of Contacts From 100s of WhatsApp Numbers ?
                    </li >
                    </NavLink>
                    <NavLink  to={"StopUsers"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How To Use API Campaigns To Track Status Of Messages Sent Via API ( Delivered / Read / Failed ) ?
                    </li >
                    </NavLink>
                    <NavLink  to={"UseAPICampaigns"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`} >
                    <li className={` mt-5 ${openSections["Campaigns"] ? "" : "hidden"}`}> 
                        How To Send Bulk Campaigns From Excel / Gsheet Without Importing Contacts ?
                    </li >
                    </NavLink>
                </div>
            </div>
            <div className={`ms-7 mt-3 ${openSections["Crm"] ? "" : "hidden"}`}>
                <NavLink to={"CrmTriggers"} className={`aria-[current=page]:text-green-700 aria-[current=page]:font-bold  mt-5`}>
                    <li>
                Crm Triggers
                </li>
                </NavLink>
            </div>
            
            
           
        </div>
      



        <NavLink to={"inbox"} className='aria-[current=page]:text-green-700 aria-[current=page]:font-bold aria-[current=page]:bg-green-400    '>
            <div className='mt-2 cursor-pointer p-1 rounded-md' >
            <li  onClick={()=>toggleSection("Inbox / Live Chat")}>
            <div className='hover:bg-gray-300 '>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox / Live Chat</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Inbox / Live Chat"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How To Create Role And Permissions For Team Members ?
                </li>
                <li className='mt-5'>
                How To Create Team Members Or Chat Operators ?
                </li>
                <li className='mt-5'>
                How To See Incoming Messages And Reply To User ?
                </li>
                <li className='mt-5'>
                How To Trigger Chatbot From Inbox ?
                </li>
                <li className='mt-5'>
                How to create Canned Replies and send them via Inbox
                </li>
                <li className='mt-5'>
                How To Add Chat Notes In Live Chat?
                </li>
               
                
                
            </div>
            
           
        </div>
        </NavLink>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("AI")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">AI</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["AI"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Create An AI Chat Bot ?
                </li>
                <li className='mt-5'>
                How to Create Voice / Audio AI Bots ?
                </li>
                <li className='mt-5'>
                How To Use AI Routers For Intent Detection ?
                </li>
                <li className='mt-5'>
                How to Use AI Forms To Collect Information Form User Via Conversational Bot ?
                </li>
               
               
                
                
            </div>
            
           
        </div>

         <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Bot Builder")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Bot Builder</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Bot Builder"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                Different Types Of Triggers ?
                </li>
                <li className='mt-5'>
                How to Create a WhatsApp ChatBot ?
                </li>
                <li className='mt-5'>
                How to Create a Facebook Page / Messenger Bot ?
                </li>
                <li className='mt-5'>
                How to Create a Facebook Page Comment Bot Or Automation ?
                </li>
                <li className='mt-5'>
                How To Collect Multiple Answers for 1 Question in a Bot ?
                </li>
                <li className='mt-5'>
                How To Check Errors With The Bot Flow ?
                </li>
                <li className='mt-5'>
                How To Collect Data Via Bots Or How To Create Data Collection Bots ?
                </li>
                <li className='mt-5'>
                How To Share A Bot Flow To Different User Account or Clone A Bot Flow In Same Account ?
                </li>
                <li className='mt-5'>
                If Deleted by Mistake How To Connect A String Again ?
                </li>
                <li className='mt-5'>
                How To Search Data From Google Sheet And Respond To User In Bot ?
                </li>
                <li className='mt-5'>
                How To Fetch Data From Google Sheet And Make Dynamic Buttons / Lists In WhatsApp ?
                </li>
                <li className='mt-5'>
                How To Make An External API Request From Bot Builder And Send Response From API In Message To User ?
                </li>
                <li className='mt-5'>
                How to send the custom field data to an external WhatsApp number
                </li>
                <li className='mt-5'>
                How to Trigger Different WhatsApp Bots For Different Meta CTWA (Ads) ?
                </li>
                <li className='mt-5'>
                How To Create WhatsApp Native Flows From WA Manager And Send Them To Users ?
                </li>
                <li className='mt-5'>
                How To Store Hidden Values With Buttons And Use Them For Bots - Button Payloads ?
                </li>
                <li className='mt-5'>
                How to Send Carousel Message Templates In WhatsApp Bot ?
                </li>
                <li className='mt-5'>
                How to Ask Questions via Bot and send to Google Sheet in Real Time ?
                </li>
                <li className='mt-5'>
                How to send a user from 1 bot to another using go to or to another step using go to function?
                </li>
                <li className='mt-5'>
                How to Send Data From Bot Builder to Automation Builder to trigger an Automations Between the Bot ?
                </li>
                <li className='mt-5'>
                Where to find Botflow templates for various industries?
                </li>
                <li className='mt-5'>
                How to sell Tickets via Bot With WhatsApp Payments ?
                </li>
                <li className='mt-5'>
                How to Trigger a Bot Flow Via Inbound Webhook ?
                </li>
                <li className='mt-5'>
                How to Lock or Unlock Botflow and Automations?
                </li>
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Automations Builder")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Automations Builder</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Automations Builder"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How To Trigger Workflow Via Inbound Workflow Or Send WhatsApp Messages Via Inbound Webhook Trigger ?
                </li>
                <li className='mt-5'>
                How To Create Drip Campaigns ?
                </li>
                <li className='mt-5'>
                How To Trigger Automations Flow Or Send WhatsApp Messages From Google Sheet Particular Column Change
                </li>
                <li className='mt-5'>
                How To Trigger Automations Flow Or WhatsApp Messages For All Or Selected Rows in Google Sheet ?
                </li>
                <li className='mt-5'>
                How to Send WhatsApp Message To Customer when New Order is Received in Shopify ?
                </li>
                <li className='mt-5'>
                How To Send Tracking link To Customers In WhatsApp And Collect Feedback For Shopify Orders ?
                </li>
                <li className='mt-5'>
                How to Recover Abandoned Carts In Shopify By Sending WhatsApp Follow up Message ?
                </li>
                <li className='mt-5' onClick={()=>toggleSection("Datastore")}>
                Datastore
                </li>
                <div className={`${openSections["Datastore"] ? "" : "hidden"}`}>
                    <li className='mt-5 ms-8'>
                        Creating Database in Mongo DB and Creating Datastore in Dashboard
                    </li>
                    <li className='mt-5 ms-8'>
                        Add New Record In Data Store
                    </li>
                    <li className='mt-5 ms-8'>
                        Find Record with Record ID
                    </li>
                    <li className='mt-5 ms-8'> 
                        Get Record with Record ID
                    </li>
                    <li className='mt-5 ms-8'>
                        Search Records with Record ID
                    </li>
                    <li className='mt-5 ms-8'>
                        Update Record with Record ID
                    </li>
                </div>
                
                <li className='mt-5'>
                How to Send WhatsApp Message When Someone Submits A Google Form?
                </li>
                <li className='mt-5'>
                How To Trigger Missed Call Webhook In Automations Builder ?
                </li>
                <li className='mt-5'>
                How to take payment via Stripe in Automation flow ?
                </li>
                <li className='mt-5'>
                How To Send WhatsApp Messages For New Leads / Inquiry On Trade India
                </li>
                <li className='mt-5'>
                How to Send Payment Reminders Or Invoice Due Date Alerts Via WhatsApp ?
                </li>
                <li className='mt-5'>
                How to Send Birthday And Anniversary Greetings Via WhatsApp?
                </li>
                
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Automation Apps / Blocks")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Automation Apps / Blocks</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Automation Apps / Blocks"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                Workflow Counter
                </li>
                <li className='mt-5'>
                How to use Splitter Block in Bot Builder ?
                </li>
                <li className='mt-5'>
                How To Use Slice And Parse Function Together?
                </li>
                <li className='mt-5'>
                Find Text Block
                </li>
                <li className='mt-5'>
                Replace Text Block
                </li>
                <li className='mt-5'>
                Remove Text block
                </li>
                <li className='mt-5'>
                Slice Function
                </li>
                <li className='mt-5'>
                Modify Current Date Block
                </li>
                <li className='mt-5'>
                Parse Number Function
                </li>
                <li className='mt-5'>
                How to generate random otp / number using Random Number Generator Block ?
                </li>
                <li className='mt-5'>
                Split Text Block
                </li>
                <li className='mt-5'>
                Calculator Block
                </li>
                <li className='mt-5'>
                Time Delay Block
                </li>
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Ecommerce")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Ecommerce</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Ecommerce"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                Getting Started With WhatsApp Commerce
                </li>
                <li className='mt-5'>
                Sync System Fields
                </li>
                <li className='mt-5'>
                How To Enable / Disable Catalog Icon For WhatsApp API Number ?
                </li>
                <li className='mt-5'>
                How To Enable / Disable Cart Functionality For WhatsApp API Number ?
                </li>
                <li className='mt-5'>
                How To Create A Meta Catalog And Link With WhatsApp API Number ?
                </li>
                <li className='mt-5'>
                How To Create A Meta Catalog And Link With WhatsApp API Number ?
                </li>
                <li className='mt-5'>
                How To Connect Meta Catalog With Ecommerce Platform ?
                </li>
                <li className='mt-5'>
                How To Enable APIs For Ecommerce ?
                </li>
                <li className='mt-5'>
                How To Create Product Categories ?
                </li>
                <li className='mt-5'>
                How To Sync Products And Orders System Fields And Edit them ?
                </li>
                <li className='mt-5'>
                How To Disable Mandatory Requirement For External Product Link ?
                </li>
                <li className='mt-5'>
                How To Add New Product ?
                </li>
                <li className='mt-5'>
                How To Push Products To Meta Catalog ?
                </li>
                <li className='mt-5'>
                Only For Indian Users - How To Update Business Compliance Information To Sell Via WhatsApp Commerce
                </li>
                <li className='mt-5'>
                How To Send Products To Your Customers ?
                </li>
                <li className='mt-5'>
                How To Import Products In Bulk Via Google Sheet ?
                </li>
                <li className='mt-5'>
                How To Collect Payment Via Razorpay ( INDIAN GATEWAY ) For WhatsApp Native Commerce ?
                </li>
                <li className='mt-5'>
                How To Collect Address, Payment and Other Details From User After You Receive An Order ?
                </li>
                <div className='mt-5'>
                <li  onClick={()=>toggleSection("Connecting with Shopify")}>
                Connecting with Shopify
                </li>
                <div className='ms-8'>
                    <li className={` mt-5 ${openSections["Connecting with Shopify"] ? "" : "hidden"}`}> 
                        How To Connect Your Shopify Store To Ecom Section ?
                    </li >
                    <li className={` mt-5 ${openSections["Connecting with Shopify"] ? "" : "hidden"}`}> 
                        How to do Base Sync settings of the Shopify Store ?
                    </li >
                    <li className={` mt-5 ${openSections["Connecting with Shopify"] ? "" : "hidden"}`}> 
                        How to Pull Existing Products from Shopify ?
                    </li >
                    <li className={` mt-5 ${openSections["Connecting with Shopify"] ? "" : "hidden"}`}> 
                        How to Push Existing Products of Shopify to Meta Catalog ?
                    </li >
                </div>
            </div>
                <li className='mt-5'>
                Define Default Field Values For Product Fields, Important For Indian Users Before Pulling Products.
                </li>
            </div>
        </div>

          <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Media Manager")}>
            <div>
                <span className="flex-1 ms-3 cursor-pointer whitespace-nowrap">Media Manager</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Media Manager"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Create Customers and Give Permissions in MediaBot?
                </li>
                <li className='mt-5'>
                How to Create Team Member in MediaBot?
                </li>
                <li className='mt-5'>
                How to Create Folder and Upload Files in MediaBot?
                </li>
            </div>
        </div>

          <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Chat Widget")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Chat Widget</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Chat Widget"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Create A Chat Widget / Icon For Your WhatsApp Number ?
                </li>
                <li className='mt-5'>
                How To Add WhatsApp Widget Or Whats App Chat Icon To Your Wordpress / WooCommerce Website ?
                </li>
                <li className='mt-5'>
                How To Add WhatsApp Click To Action Buttons / Lead Grabber On Wordpress Website ?
                </li>
                <li className='mt-5'>
                How to View / Export Leads Data Received Via the Pre Chat Form ?
                </li>
                <li className='mt-5'>
                How To Send Pre Chat Form Data To A Webhook Url Or To Automations Builder ?
                </li>
            </div>
        </div>

          <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Payments Ecosystem")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Payments Ecosystem</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Payments Ecosystem"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How To Create A Order Details Template For WhatsApp API ?
                </li>
                <li className='mt-5'>
                How to Connect Razorpay Payment Gateway With WhatsApp Native Pay For Payments Ecosystem ?
                </li>
                <li className='mt-5'>
                How to Connect PhonePe Payment Gateway With Payments Ecosystem ?
                </li>
                <li className='mt-5'>
                How to Send Payment Request Campaigns On WhatsApp ?
                </li>
                <li className='mt-5'>
                How to Send Payment Request Message In A WhatsApp Bot ?
                </li>
                <li className='mt-5'>
                How to Send Message Or Run Bot Flow Once A Payment is Successful ?
                </li>
                <li className='mt-5'>
                How to Send Message To User Once the Payment is Failed
                </li>
            </div>
        </div>

          <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("WhatsApp Mini Apps")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">WhatsApp Mini Apps</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["WhatsApp Mini Apps"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                    WhatsApp Mini Apps How To Create WhatsApp Mini Apps / Native Flows And Send Via Bot Builder ?
                </li>
                <li className='mt-5'>
                How to Send WhatsApp Native Flows / Mini App Via Bot And Save Response In Custom Fields in Crm ?
                </li>
                <li className='mt-5'>
                How To Create WhatsApp Template With Mini Apps / Native Flows ?
                </li>
                <li className='mt-5'>
                How to Create Conditional Calculation In Mini Apps Or WhatsApp Native Flows ?
                </li>
            </div>
        </div>

          <div className='mt-3 cursor-pointer'> 
            <li  onClick={()=>toggleSection("Dynamic Experiences")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Dynamic Experiences</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Dynamic Experiences"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                    How to Create a Dynamic Image Experience ?
                </li>
                <li className='mt-5'>
                How to Send Dynamic Images in Bulk Via Campaigns ?
                </li>
                <li className='mt-5'>
                How to Send Dynamic Image In A Bot Flow ?
                </li>
                <li className='mt-5'>
                How to Create Dynamic Tickets And Send It To User Via WhatsApp Bot ?
                </li>
                <li className='mt-5'>
                How to Generate Image Dynamically From Webhook and Send to User Via WhatsApp ?
                </li>
            </div>
        </div>


          <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Integrations")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Integrations</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Integrations"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                    Deskera CRM
                </li>
                <li className='mt-5'>
                ChatGPT / OpenAI
                </li>
                <li className='mt-5' onClick={()=>toggleSection("Zapier")}>
                    Zapier
                </li>
                <div className={`ms-8 mt-3 ${openSections["Zapier"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Send WhatsApp Messages Via Zapier Automations ?
                </li>
            </div>
                <li className='mt-5' onClick={()=>toggleSection("Make")}>
                    Make
                </li>
                <div className={`ms-8 mt-3 ${openSections["Make"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to send data to Make when a contact is created / custom field is updated ?
                </li>
            </div>

               
                <li className='mt-5' onClick={()=>toggleSection("Pabbly Connect")}>
                    Pabbly Connect
                </li>
                <div className={`ms-8 mt-3 ${openSections["Pabbly Connect"] ? "" : "hidden"}`}>
                    <li className='mt-5'>
                How to Send WhatsApp Messages Via Pabbly Connect ?
                </li>
                <li className='mt-5'>
                How to Send WhatsApp Messages With Image / Document / Video Via Pabbly Connect ?
                </li>
            </div>

                <li className='mt-5' onClick={()=>toggleSection("Shopify")}>
                    Shopify
                </li>
                <div className={`ms-8 mt-3 ${openSections["Shopify"] ? "" : "hidden"}`}>
                    <li className='mt-5'>
                How to Recover Abandoned Carts In Shopify By Sending WhatsApp Follow up Message ?
                </li>
                <li className='mt-5'>
                How To Send Tracking link To Customers In WhatsApp And Collect Feedback For Shopify Orders ?
                </li>
                <li className='mt-5'>
                How to Automatically Send Shipment Tracking Details To Customers From Shopify ?
                </li>
                <li className='mt-5'>
                How to Automatically Send Shipment Tracking Details To Customers From Shopify ?
                </li>
                
            </div>

                <li className='mt-5' onClick={()=>toggleSection("Woocommerce")}>
                    Woocommerce
                </li>
                <div className={`ms-8 mt-3 ${openSections["Woocommerce"] ? "" : "hidden"}`}>
                    <li className='mt-5'>
                How to Send Discount Coupon Code via WhatsApp to Recover Abandoned Carts In Woocommerce ?
                </li>
                <li className='mt-5'>
                How To Send Recovery WhatsApp Messages For Abandoned Cart Orders In Woo Commerce?
                </li>
                <li className='mt-5'>
                How to send New Order Notifications and Status Update Notifications For WooCommerce Via WhatsApp ?
                </li>
            </div>
                

                
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Reward Points And Wallet")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Reward Points And Wallet</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Reward Points And Wallet"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Create a New Store ?
                </li>
                <li className='mt-5'>
                How to Create A Customer And Explanation About Customer Fields
                </li>
                <li className='mt-5'>
                How to Add Reward Points Manually / Via Bots and Automations?
                </li>
                <li className='mt-5'>
                How to Send / Receive Updates By WhatsApp When A Customer is Created Or Transaction Is Updated ?
                </li>
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("File Upload API")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">File Upload API</span>
            </div>
            </li>
            
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Custom Objects QR Code")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Custom Objects QR Code</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Custom Objects QR Code"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How to Generate Unique QR Codes And Send Them To User ?
                </li>
                <li className='mt-5'>
                How to Download the QR scanner app and validate the QR Code ?
                </li>
                <li className='mt-5'>
                How to Create Dynamic Tickets And Send It To User Via WhatsApp Bot ?
                </li>
                <li className='mt-5'>
                How to Generate Event / Unique QRs in Bulk and Send To Receivers Via Bulk Campaigns ?
                </li>
                <li className='mt-5' onClick={()=>toggleSection("Event Ticket")}>
                How to Generate Event Ticket / Unique QRs in Bulk and Send To Receivers Via Automations Builder ?
                </li>
                <div className={`ms-7 mt-3 ${openSections["Event Ticket"] ? "" : "hidden"}`}>
                    <li>How to sell tickets via bot ?</li>
                </div>
                <li className='mt-5'>
                How to sell Tickets via Bot With WhatsApp Payments ?
                </li>
            </div>
        </div>


         <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Calendar Bookings")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Calendar Bookings</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Calendar Bookings"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                Features of Calendar Bookings
                </li>
                <li className='mt-5'>
                How to Create A Calendar Event and Edit Fields / Labels ?
                </li>
                <li className='mt-5'>
                How to Create Availability Slots and Assign It To Calendar Event ?
                </li>
                <li className='mt-5'>
                How to Create An Appointment Booking WhatsApp Chatbot ?
                </li>
                <li className='mt-5'>
                How to Set Webhook for Calendar Event And Send Reminder Messages to User Via WhatsApp ?
                </li>
                <li className='mt-5'>
                How can admin approve and reject bookings via WhatsApp
                </li>
            </div>
        </div>

        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Common Error / Issues")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Common Error / Issues</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Common Error / Issues"] ? "" : "hidden"}`}>
                <li className='mt-5' onClick={()=>toggleSection("WhatsApp API Errors")}>
                Troubleshooting: WhatsApp API Errors
                </li>
                <div className={`ms-7 mt-3 ${openSections["WhatsApp API Errors"] ? "" : "hidden"}`} >
                    <li className='mt-5'>
                        Business has been locked
                        
                    </li>
                    <li className='mt-5'>
                        #131026 Receiver is incapable of receiving this message

                    </li>
                    <li className='mt-5'> 
                        Template name does not exist in the translation

                    </li>
                    <li className='mt-5'>
                        WhatsApp Number Status Shows NA

                    </li>
                    <li className='mt-5'>
                        Your WhatsApp Business Account is restricted from creating a new template

                    </li>
                    <li className='mt-5'>
                        #132005 Translated text too long

                    </li>
                    <li className='mt-5'>
                        Maximum Phone Numbers Limit Reached For A WhatsApp Business Account

                    </li>
                    <li className='mt-5'>
                        WhatsApp’s New Marketing Message Limits Policy Change: Detailed Guide

                    </li>
                </div>
                <li className='mt-5'>
                Bot Not Triggering : Not Replying : Not Starting At All , How To Solve ?
                </li>
                <li className='mt-5'>
                WhatsApp Number Is In Pending Stage
                </li>
                <li className='mt-5'>
                How To Check Why Messages Are Getting Failed In Broadcasts / Campaigns ?
                </li>
                <li className='mt-5'>
                Bot Not Triggering for Any Message Received Trigger Even After Marking Chats As Done ?
                </li>
            </div>
        </div>


        <div className='mt-3 cursor-pointer'>
            <li  onClick={()=>toggleSection("Virtual Number")}>
            <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Virtual Number</span>
            </div>
            </li>
            <div className={`ms-7 mt-3 ${openSections["Virtual Number"] ? "" : "hidden"}`}>
                <li className='mt-5'>
                How To Register A Indian Virtual Number For WhatsApp API ?
                </li>
                <li className='mt-5'>
                How to Set Destination Number Or Forwarding Number for your Virtual Number ?
                </li>
            </div>
        </div>



       

        
       
        
      
      </ul>
    </div>
  </aside>
  </div>
  
  
  </>
}
