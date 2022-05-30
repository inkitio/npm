
  # Inkit Node SDK
  
  ## Usage
  ```js
   const Inkit = require("inkit").default
   
   Inkit.apiToken = "xxxxxxxxx"
   
    const resp = await Inkit.Render.getHtml({
      entityId: 'rend_xxxxxxxxxxxxxxxxx'
    })
  ```
  
  ## Methods
 
 ## render 
 
  
      
 ### create 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`folderId`| "string"|false|
|`templateId`| "string"|false|
|`html`| "string"|false|
|`htmlUrl`| "string"|false|
|`width`| "float"|false|
|`height`| "float"|false|
|`unit`| "string"|false|
|`description`| "string"|true|
|`metadata`| "object"|true|
|`mergeParameters`| "object"|true|
|`expireAt`| "string"|true|
|`expireAfterNViews`| "number"|true|
|`colorSpace`| "string"|true|
|`colorSpaceProfile`| "string"|true|
|`scale`| "float"|true|

      
      
      
      
      
 #### Response type:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`id`| "string"|false|
|`folder_id`| ["string",null]|false|
|`name`| ["string",null]|false|
|`description`| ["string",null]|false|
|`status`| "string"|false|
|`pdf_url`| "string"|false|
|`html_url`| "string"|false|
|`width`| ["float",null]|false|
|`height`| ["float",null]|false|
|`unit`| ["string",null]|false|
|`merge_parameters`| ["array",null]|false|
|`metadata`| ["array",null]|false|
|`expire_after_n_views`| ["number",null]|false|
|`expire_at`| ["string",null]|false|
|`updated_at`| "string"|false|
|`created_at`| "string"|false|
|`scale`| "float"|true|
|`prefer_css_page_size`| "boolean"|true|

      
     
       
      
 ### list 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`pageSize`| "number"|false|
|`page`| "number"|false|
|`sort`| ["-created_at","created_at"]|true|
|`search`| "string"|true|
|`dataId`| "string"|false|

      
      
      
      
     
       
      
 ### get 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`entityId`| "string"|false|

      
      
      
      
      
 #### Response type:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`id`| "string"|false|
|`folder_id`| ["string",null]|false|
|`name`| "string"|false|
|`description`| "string"|false|
|`status`| "string"|false|
|`pdf_url`| "string"|false|
|`html_url`| "string"|false|
|`width`| ["float",null]|false|
|`height`| ["float",null]|false|
|`unit`| ["string",null]|false|
|`merge_parameters`| ["array",null]|false|
|`metadata`| "array"|false|
|`expire_after_n_views`| ["number",null]|false|
|`expire_at`| ["string",null]|false|
|`updated_at`| "string"|false|
|`created_at`| "string"|false|
|`created_by`| [{"id":"number","name":["string",null],"first_name":["string",null],"last_name":["string",null]},null]|false|

      
     
       
      
 ### delete 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`entityId`| "string"|false|

      
      
      
 #### Query Params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`ids`| "string"|false|
|`archive`| "boolean"|false|

      
      
      
      
 #### Response type:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`id`| "string"|false|
|`folder_id`| ["string",null]|false|
|`name`| "string"|false|
|`description`| "string"|false|
|`status`| "string"|false|
|`pdf_url`| "string"|false|
|`html_url`| "string"|false|
|`width`| ["float",null]|false|
|`height`| ["float",null]|false|
|`unit`| ["string",null]|false|
|`merge_parameters`| ["array",null]|false|
|`metadata`| "array"|false|
|`expire_after_n_views`| ["number",null]|false|
|`expire_at`| ["string",null]|false|
|`updated_at`| "string"|false|
|`created_at`| "string"|false|

      
     
       
      
 ### getPdf 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`entityId`| "string"|false|

      
      
      
      
      
 #### Response type:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`data`| "string"|false|

      
     
       
      
 ### getHtml 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`entityId`| "string"|false|

      
      
      
      
     
       
      
 ### getDocx 
      
 #### Method params:
      
 | Field                         | Type                 | Optional                                                               |
| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |
|`entityId`| "string"|false|

      
      
      
      
     
      