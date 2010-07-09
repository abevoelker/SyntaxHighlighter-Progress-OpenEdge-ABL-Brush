/*
 * Progress/ABL/OpenEdge brush (1.0) for SyntaxHighlighter (3.0.83)
 *
 * SyntaxHighlighter by Alex Gorbatchev
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * Progress/ABL/OpenEdge brush by Abe Voelker
 *   Homepage:  http://abevoelker.com
 * Brush page:  http://github.com/abevoelker/SyntaxHighlighter-Progress-OpenEdge-ABL-Brush
 *     Donate:  http://abevoelker.com/donate (copying/formatting all those keywords took some effort :)
 */

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'ABSOLUTE ABS ABSO ABSOL ABSOLU ABSOLUT ACCELERATOR ' +
				'ACCUM ACCUMULATE ACCUM ACCUMU ACCUMUL ACCUMULA ACCUMULAT ' +
				'ACTIVE-FORM ACTIVE-WINDOW ADD ADD-BUFFER ' +
				'ADD-CALC-COLUMN ADD-COLUMNS-FROM ADD-EVENTS-PROCEDURE ' +
				'ADD-FIELDS-FROM ADD-FIRST ADD-INDEX-FIELD ADD-LAST ' +
				'ADD-LIKE-COLUMN ADD-LIKE-FIELD ADD-LIKE-INDEX ' +
				'ADD-NEW-FIELD ADD-NEW-INDEX ADD-SCHEMA-LOCATION ADD-SUPER-PROCEDURE ' +
				'ADM-DATA ADVISE ALERT-BOX ALIAS ALL ALLOW-COLUMN-SEARCHING ' +
				'ALLOW-REPLICATION ALTER ALWAYS-ON-TOP AMBIGUOUS AMBIG AMBIGU AMBIGUO AMBIGUOU ' +
				'ANALYZE ANALYZ AND ANSI-ONLY ANY ANYWHERE APPEND APPL-ALERT-BOXES ' +
				'APPL-ALERT APPL-ALERT- APPL-ALERT-B APPL-ALERT-BO APPL-ALERT-BOX APPL-ALERT-BOXE ' +
				'APPL-CONTEXT-ID APPLICATION APPLY APPSERVER-INFO APPSERVER-PASSWORD ' +
				'APPSERVER-USERID ARRAY-MESSAGE AS ASC ASCENDING ASCE ASCEN ' +
				'ASCEND ASCENDI ASCENDIN ASK-OVERWRITE ASSEMBLY ASSIGN ' +
				'ASYNCHRONOUS ASYNC-REQUEST-COUNT ASYNC-REQUEST-HANDLE AT ' +
				'ATTACHED-PAIRLIST ATTR-SPACE ATTR ATTRI ATTRIB ATTRIBU ATTRIBUT ' +
				'AUDIT-CONTROL AUDIT-ENABLED AUDIT-EVENT-CONTEXT AUDIT-POLICY ' +
				'AUTHENTICATION-FAILED AUTHORIZATION AUTO-COMPLETION AUTO-COMP ' +
				'AUTO-COMPL AUTO-COMPLE AUTO-COMPLET AUTO-COMPLETI AUTO-COMPLETIO ' +
				'AUTO-ENDKEY AUTO-END-KEY AUTO-GO AUTO-INDENT AUTO-IND ' +
				'AUTO-INDE AUTO-INDEN AUTOMATIC AUTO-RESIZE AUTO-RETURN AUTO-RET ' +
				'AUTO-RETU AUTO-RETUR AUTO-SYNCHRONIZE AUTO-ZAP AUTO-Z AUTO-ZA ' +
				'AVAILABLE AVAIL AVAILA AVAILAB AVAILABL AVAILABLE-FORMATS ' +
				'AVERAGE AVE AVER AVERA AVERAG AVG BACKGROUND BACK BACKG ' +
				'BACKGR BACKGRO BACKGROU BACKGROUN BACKWARDS BACKWARD ' +
				'BASE64-DECODE BASE64-ENCODE BASE-ADE BASE-KEY BATCH-MODE BATCH ' +
				'BATCH- BATCH-M BATCH-MO BATCH-MOD BATCH-SIZE BEFORE-HIDE BEFORE-H ' +
				'BEFORE-HI BEFORE-HID BEGIN-EVENT-GROUP BEGINS BELL BETWEEN ' +
				'BGCOLOR BGC BGCO BGCOL BGCOLO BIG-ENDIAN BINARY BIND BIND-WHERE ' +
				'BLANK BLOCK-ITERATION-DISPLAY BORDER-BOTTOM-CHARS BORDER-B ' +
				'BORDER-BO BORDER-BOT BORDER-BOTT BORDER-BOTTO BORDER-BOTTOM-PIXELS ' +
				'BORDER-BOTTOM-P BORDER-BOTTOM-PI BORDER-BOTTOM-PIX ' +
				'BORDER-BOTTOM-PIXE BORDER-BOTTOM-PIXEL BORDER-LEFT-CHARS BORDER-L ' +
				'BORDER-LE BORDER-LEF BORDER-LEFT BORDER-LEFT- BORDER-LEFT-C ' +
				'BORDER-LEFT-CH BORDER-LEFT-CHA BORDER-LEFT-CHAR BORDER-LEFT-PIXELS ' +
				'BORDER-LEFT-P BORDER-LEFT-PI BORDER-LEFT-PIX BORDER-LEFT-PIXE ' +
				'BORDER-LEFT-PIXEL BORDER-RIGHT-CHARS BORDER-R BORDER-RI BORDER-RIG ' +
				'BORDER-RIGH BORDER-RIGHT BORDER-RIGHT- BORDER-RIGHT-C BORDER-RIGHT-CH ' +
				'BORDER-RIGHT-CHA BORDER-RIGHT-CHAR BORDER-RIGHT-PIXELS BORDER-RIGHT-P ' +
				'BORDER-RIGHT-PI BORDER-RIGHT-PIX BORDER-RIGHT-PIXE BORDER-RIGHT-PIXEL ' +
				'BORDER-TOP-CHARS BORDER-T BORDER-TO BORDER-TOP BORDER-TOP- BORDER-TOP-C ' +
				'BORDER-TOP-CH BORDER-TOP-CHA BORDER-TOP-CHAR BORDER-TOP-PIXELS ' +
				'BORDER-TOP-P BORDER-TOP-PI BORDER-TOP-PIX BORDER-TOP-PIXE BORDER-TOP-PIXEL ' +
				'BOX BOX-SELECTABLE BOX-SELECT BOX-SELECTA BOX-SELECTAB BOX-SELECTABL ' +
				'BREAK BROWSE BUFFER BUFFER-CHARS BUFFER-COMPARE BUFFER-COPY BUFFER-CREATE ' +
				'BUFFER-DELETE BUFFER-FIELD BUFFER-HANDLE BUFFER-LINES BUFFER-NAME ' +
				'BUFFER-RELEASE BUFFER-VALUE BUTTON BUTTONS BUTTON BY BY-POINTER ' +
				'BY-VARIANT-POINTER CACHE CACHE-SIZE CALL CALL-NAME CALL-TYPE CANCEL-BREAK ' +
				'CANCEL-BUTTON CAN-CREATE CAN-DELETE CAN-DO CAN-FIND CAN-QUERY CAN-READ ' +
				'CAN-SET CAN-WRITE CAPS CAREFUL-PAINT CASE CASE-SENSITIVE CASE-SEN ' +
				'CASE-SENS CASE-SENSI CASE-SENSIT CASE-SENSITI CASE-SENSITIV ' +
				'CAST CATCH CDECL CENTERED CENTER CENTERE CHAINED CHARACTER_LENGTH ' +
				'CHARSET CHECK CHECKED CHOOSE CHR CLASS CLASS-TYPE CLEAR ' +
				'CLEAR-APPL-CONTEXT CLEAR-LOG CLEAR-SELECTION CLEAR-SELECT ' +
				'CLEAR-SELECTI CLEAR-SELECTIO CLEAR-SORT-ARROWS CLEAR-SORT-ARROW ' +
				'CLIENT-CONNECTION-ID CLIENT-PRINCIPAL CLIENT-TTY CLIENT-TYPE ' +
				'CLIENT-WORKSTATION CLIPBOARD CLOSE CLOSE-LOG CODE CODEBASE-LOCATOR ' +
				'CODEPAGE CODEPAGE-CONVERT COLLATE COL-OF COLON COLON-ALIGNED ' +
				'COLON-ALIGN COLON-ALIGNE COLOR COLOR-TABLE COLUMN COL COLU COLUM ' +
				'COLUMN-BGCOLOR COLUMN-DCOLOR COLUMN-FGCOLOR COLUMN-FONT COLUMN-LABEL ' +
				'COLUMN-LAB COLUMN-LABE COLUMN-MOVABLE COLUMN-OF COLUMN-PFCOLOR ' +
				'COLUMN-READ-ONLY COLUMN-RESIZABLE COLUMNS COLUMN-SCROLLING ' +
				'COMBO-BOX COMMAND COMPARES COMPILE COMPILER COMPLETE COM-SELF ' +
				'CONFIG-NAME CONNECT CONNECTED CONSTRUCTOR CONTAINS CONTENTS CONTEXT ' +
				'CONTEXT-HELP CONTEXT-HELP-FILE CONTEXT-HELP-ID CONTEXT-POPUP ' +
				'CONTROL CONTROL-BOX CONTROL-FRAME CONVERT CONVERT-3D-COLORS ' +
				'CONVERT-TO-OFFSET CONVERT-TO-OFFS CONVERT-TO-OFFSE COPY-DATASET ' +
				'COPY-LOB COPY-SAX-ATTRIBUTES COPY-TEMP-TABLE COUNT COUNT-OF ' +
				'CPCASE CPCOLL CPINTERNAL CPLOG CPPRINT CPRCODEIN CPRCODEOUT ' +
				'CPSTREAM CPTERM CRC-VALUE CREATE CREATE-LIKE CREATE-LIKE-SEQUENTIAL ' +
				'CREATE-NODE-NAMESPACE CREATE-RESULT-LIST-ENTRY CREATE-TEST-FILE ' +
				'CURRENT CURRENT_DATE CURRENT_DATE CURRENT-CHANGED CURRENT-COLUMN ' +
				'CURRENT-ENVIRONMENT CURRENT-ENV CURRENT-ENVI CURRENT-ENVIR ' +
				'CURRENT-ENVIRO CURRENT-ENVIRON CURRENT-ENVIRONM CURRENT-ENVIRONME ' +
				'CURRENT-ENVIRONMEN CURRENT-ITERATION CURRENT-LANGUAGE CURRENT-LANG ' +
				'CURRENT-LANGU CURRENT-LANGUA CURRENT-LANGUAG CURRENT-QUERY ' +
				'CURRENT-RESULT-ROW CURRENT-ROW-MODIFIED CURRENT-VALUE CURRENT-WINDOW ' +
				'CURSOR CURS CURSO CURSOR-CHAR CURSOR-LINE CURSOR-OFFSET DATABASE ' +
				'DATA-BIND DATA-ENTRY-RETURN DATA-ENTRY-RET DATA-ENTRY-RETU ' +
				'DATA-ENTRY-RETUR DATA-RELATION DATA-REL DATA-RELA DATA-RELAT ' +
				'DATA-RELATI DATA-RELATIO DATASERVERS DATASET DATASET-HANDLE DATA-SOURCE ' +
				'DATA-SOURCE-COMPLETE-MAP DATA-SOURCE-MODIFIED DATA-SOURCE-ROWID ' +
				'DATA-TYPE DATA-T DATA-TY DATA-TYP DATE-FORMAT DATE-F DATE-FO ' +
				'DATE-FOR DATE-FORM DATE-FORMA DAY DBCODEPAGE DBCOLLATION DBNAME ' +
				'DBPARAM DB-REFERENCES DBRESTRICTIONS DBREST DBRESTR DBRESTRI ' +
				'DBRESTRIC DBRESTRICT DBRESTRICTI DBRESTRICTIO DBRESTRICTION ' +
				'DBTASKID DBTYPE DBVERSION DBVERS DBVERSI DBVERSIO DCOLOR ' +
				'DDE DDE-ERROR DDE-ID DDE-I DDE-ITEM DDE-NAME DDE-TOPIC DEBLANK ' +
				'DEBUG DEBU DEBUG-ALERT DEBUGGER DEBUG-LIST DECIMALS DECLARE ' +
				'DECLARE-NAMESPACE DECRYPT DEFAULT DEFAULT-BUFFER-HANDLE ' +
				'DEFAULT-BUTTON DEFAUT-B DEFAUT-BU DEFAUT-BUT DEFAUT-BUTT DEFAUT-BUTTO ' +
				'DEFAULT-COMMIT DEFAULT-EXTENSION DEFAULT-EX DEFAULT-EXT DEFAULT-EXTE ' +
				'DEFAULT-EXTEN DEFAULT-EXTENS DEFAULT-EXTENSI DEFAULT-EXTENSIO ' +
				'DEFAULT-NOXLATE DEFAULT-NOXL DEFAULT-NOXLA DEFAULT-NOXLAT ' +
				'DEFAULT-VALUE DEFAULT-WINDOW DEFINE DEF DEFI DEFIN DEFINED ' +
				'DEFINE-USER-EVENT-MANAGER DELETE DEL DELE DELET DELETE-CHARACTER ' +
				'DELETE-CHAR DELETE-CHARA DELETE-CHARAC DELETE-CHARACT DELETE-CHARACTE ' +
				'DELETE-CURRENT-ROW DELETE-LINE DELETE-RESULT-LIST-ENTRY DELETE-SELECTED-ROW ' +
				'DELETE-SELECTED-ROWS DELIMITER DESC DESCENDING DESC DESCE DESCEN ' +
				'DESCEND DESCENDI DESCENDIN DESELECT-FOCUSED-ROW DESELECTION ' +
				'DESELECT-ROWS DESELECT-SELECTED-ROW DESTRUCTOR DIALOG-BOX ' +
				'DICTIONARY DICT DICTI DICTIO DICTION DICTIONA DICTIONAR ' +
				'DIR DISABLE DISABLE-AUTO-ZAP DISABLED DISABLE-DUMP-TRIGGERS ' +
				'DISABLE-LOAD-TRIGGERS DISCONNECT DISCON DISCONN DISCONNE DISCONNEC ' +
				'DISP DISPLAY DISP DISPL DISPLA DISPLAY-MESSAGE DISPLAY-TYPE ' +
				'DISPLAY-T DISPLAY-TY DISPLAY-TYP DISTINCT DO DOMAIN-DESCRIPTION ' +
				'DOMAIN-NAME DOMAIN-TYPE DOS DOUBLE DOWN DRAG-ENABLED DROP DROP-DOWN ' +
				'DROP-DOWN-LIST DROP-FILE-NOTIFY DROP-TARGET DUMP DYNAMIC ' +
				'DYNAMIC-FUNCTION EACH ECHO EDGE-CHARS EDGE EDGE- EDGE-C ' +
				'EDGE-CH EDGE-CHA EDGE-CHAR EDGE-PIXELS EDGE-P EDGE-PI EDGE-PIX ' +
				'EDGE-PIXE EDGE-PIXEL EDIT-CAN-PASTE EDIT-CAN-UNDO EDIT-CLEAR ' +
				'EDIT-COPY EDIT-CUT EDITING EDITOR EDIT-PASTE EDIT-UNDO ELSE ' +
				'EMPTY EMPTY-TEMP-TABLE ENABLE ENABLED-FIELDS ENCODE ENCRYPT ' +
				'ENCRYPT-AUDIT-MAC-KEY ENCRYPTION-SALT END END-DOCUMENT ' +
				'END-ELEMENT END-EVENT-GROUP END-FILE-DROP ENDKEY END-KEY ' +
				'END-MOVE END-RESIZE END-ROW-RESIZE END-USER-PROMPT ENTERED ' +
				'ENTRY EQ ERROR ERROR-COLUMN ERROR-COL ERROR-COLU ERROR-COLUM ' + 
				'ERROR-ROW ERROR-STACK-TRACE ERROR-STATUS ERROR-STAT ERROR-STATU ' +
				'ESCAPE ETIME EVENT-GROUP-ID EVENT-PROCEDURE EVENT-PROCEDURE-CONTEXT ' +
				'EVENTS EVENT EVENT-TYPE EVENT-T EVENT-TY EVENT-TYP EXCEPT ' +
				'EXCLUSIVE-ID EXCLUSIVE-LOCK EXCLUSIVE EXCLUSIVE- EXCLUSIVE-L ' +
				'EXCLUSIVE-LO EXCLUSIVE-LOC EXCLUSIVE-WEB-USER EXECUTE EXISTS ' +
				'EXP EXPAND EXPANDABLE EXPLICIT EXPORT EXPORT-PRINCIPAL EXTENDED ' +
				'EXTENT EXTERNAL FALSE FETCH FETCH-SELECTED-ROW FGCOLOR FGC FGCO ' +
				'FGCOL FGCOLO FIELD FIELDS FIELD FILE FILE-CREATE-DATE ' +
				'FILE-CREATE-TIME FILE-INFORMATION FILE-INFO FILE-INFOR FILE-INFORM ' +
				'FILE-INFORMA FILE-INFORMAT FILE-INFORMATI FILE-INFORMATIO FILE-MOD-DATE ' +
				'FILE-MOD-TIME FILENAME FILE-NAME FILE-OFFSET FILE-OFF FILE-OFFS FILE-OFFSE ' + 
				'FILE-SIZE FILE-TYPE FILL FILLED FILL-IN FILTERS FINAL FINALLY FIND ' +
				'FIND-BY-ROWID FIND-CASE-SENSITIVE FIND-CURRENT FINDER FIND-FIRST ' +
				'FIND-GLOBAL FIND-LAST FIND-NEXT-OCCURRENCE FIND-PREV-OCCURRENCE ' +
				'FIND-SELECT FIND-UNIQUE FIND-WRAP-AROUND FIRST FIRST-ASYNCH-REQUEST ' +
				'FIRST-CHILD FIRST-COLUMN FIRST-FORM FIRST-OBJECT FIRST-OF ' +
				'FIRST-PROCEDURE FIRST-PROC FIRST-PROCE FIRST-PROCED FIRST-PROCEDU FIRST-PROCEDUR ' + 
				'FIRST-SERVER FIRST-TAB-ITEM FIRST-TAB-I FIRST-TAB-IT FIRST-TAB-ITE ' +
				'FIT-LAST-COLUMN FIXED-ONLY FLAT-BUTTON FLOAT FOCUS FOCUSED-ROW ' +
				'FOCUSED-ROW-SELECTED FONT FONT-TABLE FOR FORCE-FILE ' +
				'FOREGROUND FORE FOREG FOREGR FOREGRO FOREGROU FOREGROUN ' +
				'FORM FORMAT FORM FORMA FORMATTED FORMATTE FORM-LONG-INPUT ' +
				'FORWARD FORWARDS FORWARD FRAGMENT FRAGMEN FRAME FRAM ' + 
				'FRAME-COL FRAME-DB FRAME-DOWN FRAME-FIELD FRAME-FILE ' +
				'FRAME-INDEX FRAME-INDE FRAME-LINE FRAME-NAME FRAME-ROW ' +
				'FRAME-SPACING FRAME-SPA FRAME-SPAC FRAME-SPACI FRAME-SPACIN ' +
				'FRAME-VALUE FRAME-VAL FRAME-VALU FRAME-X FRAME-Y FREQUENCY FROM ' +
				'FROM-CHARS FROM-C FROM-CH FROM-CHA FROM-CHAR ' +
				'FROM-CURRENT FROM-CUR FROM-CURR FROM-CURRE FROM-CURREN ' +
				'FROM-PIXELS FROM-P FROM-PI FROM-PIX FROM-PIXE FROM-PIXEL ' + 
				'FULL-HEIGHT-CHARS FULL-HEIGHT FULL-HEIGHT- FULL-HEIGHT-C FULL-HEIGHT-CH FULL-HEIGHT-CHA FULL-HEIGHT-CHAR ' +
				'FULL-HEIGHT-PIXELS FULL-HEIGHT-P FULL-HEIGHT-PI FULL-HEIGHT-PIX FULL-HEIGHT-PIXE FULL-HEIGHT-PIXEL ' + 
				'FULL-PATHNAME FULL-PATHN FULL-PATHNA FULL-PATHNAM ' + 
				'FULL-WIDTH-CHARS FULL-WIDTH FULL-WIDTH- FULL-WIDTH-C FULL-WIDTH-CH FULL-WIDTH-CHA FULL-WIDTH-CHAR ' +
				'FULL-WIDTH-PIXELS FULL-WIDTH-P FULL-WIDTH-PI FULL-WIDTH-PIX FULL-WIDTH-PIXE FULL-WIDTH-PIXEL ' + 
				'FUNCTION FUNCTION-CALL-TYPE GATEWAYS GATEWAY GE GENERATE-MD5 ' +
				'GENERATE-PBE-KEY GENERATE-PBE-SALT GENERATE-RANDOM-KEY GENERATE-UUID GET ' +
				'GET-ATTR-CALL-TYPE GET-ATTRIBUTE-NODE GET-BINARY-DATA ' +
				'GET-BLUE-VALUE GET-BLUE GET-BLUE- GET-BLUE-V GET-BLUE-VA GET-BLUE-VAL GET-BLUE-VALU ' +
				'GET-BROWSE-COLUMN GET-BUFFER-HANDLEGETBYTE GET-BYTE GET-CALLBACK-PROC-CONTEXT ' +
				'GET-CALLBACK-PROC-NAME GET-CGI-LIST GET-CGI-LONG-VALUE GET-CGI-VALUE ' +
				'GET-CODEPAGES GET-COLLATIONS GET-CONFIG-VALUE GET-CURRENT GET-DOUBLE ' +
				'GET-DROPPED-FILE GET-DYNAMIC GET-ERROR-COLUMN GET-ERROR-ROW GET-FILE ' +
				'GET-FILE-NAME GET-FILE-OFFSET GET-FILE-OFFSE GET-FIRST GET-FLOAT ' +
				'GET-GREEN-VALUE GET-GREEN GET-GREEN- GET-GREEN-V GET-GREEN-VA GET-GREEN-VAL GET-GREEN-VALU ' +
				'GET-INDEX-BY-NAMESPACE-NAME GET-INDEX-BY-QNAME GET-INT64 GET-ITERATION ' +
				'GET-KEY-VALUE GET-KEY-VAL GET-KEY-VALU GET-LAST GET-LOCALNAME-BY-INDEX ' +
				'GET-LONG GET-MESSAGE GET-NEXT GET-NUMBER GET-POINTER-VALUE ' +
				'GET-PREV GET-PRINTERS GET-PROPERTY GET-QNAME-BY-INDEX ' +
				'GET-RED-VALUE GET-RED GET-RED- GET-RED-V GET-RED-VA GET-RED-VAL GET-RED-VALU ' +
				'GET-REPOSITIONED-ROW GET-RGB-VALUE ' +
				'GET-SELECTED-WIDGET GET-SELECTED GET-SELECTED- GET-SELECTED-W GET-SELECTED-WI GET-SELECTED-WID GET-SELECTED-WIDG GET-SELECTED-WIDGE ' +
				'GET-SHORT GET-SIGNATURE GET-SIZE GET-STRING GET-TAB-ITEM ' +
				'GET-TEXT-HEIGHT-CHARS GET-TEXT-HEIGHT GET-TEXT-HEIGHT- GET-TEXT-HEIGHT-C GET-TEXT-HEIGHT-CH GET-TEXT-HEIGHT-CHA GET-TEXT-HEIGHT-CHAR ' +
				'GET-TEXT-HEIGHT-PIXELS GET-TEXT-HEIGHT-P GET-TEXT-HEIGHT-PI GET-TEXT-HEIGHT-PIX GET-TEXT-HEIGHT-PIXE GET-TEXT-HEIGHT-PIXEL ' + 
				'GET-TEXT-WIDTH-CHARS GET-TEXT-WIDTH GET-TEXT-WIDTH- GET-TEXT-WIDTH-C GET-TEXT-WIDTH-CH GET-TEXT-WIDTH-CHA GET-TEXT-WIDTH-CHAR ' +
				'GET-TEXT-WIDTH-PIXELS GET-TEXT-WIDTH-P GET-TEXT-WIDTH-PI GET-TEXT-WIDTH-PIX GET-TEXT-WIDTH-PIXE GET-TEXT-WIDTH-PIXEL ' + 
				'GET-TYPE-BY-INDEX GET-TYPE-BY-NAMESPACE-NAME GET-TYPE-BY-QNAME GET-UNSIGNED-LONG ' +
				'GET-UNSIGNED-SHORT GET-URI-BY-INDEX GET-VALUE-BY-INDEX GET-VALUE-BY-NAMESPACE-NAME ' +
				'GET-VALUE-BY-QNAME GET-WAIT-STATE GLOBAL GO-ON ' +
				'GO-PENDING GO-PEND GO-PENDI GO-PENDIN GRANT ' +
				'GRAPHIC-EDGE GRAPHIC-E GRAPHIC-ED GRAPHIC-EDG ' + 
				'GRID-FACTOR-HORIZONTAL GRID-FACTOR-H GRID-FACTOR-HO GRID-FACTOR-HOR GRID-FACTOR-HORI GRID-FACTOR-HORIZ GRID-FACTOR-HORIZO GRID-FACTOR-HORIZON GRID-FACTOR-HORIZONT GRID-FACTOR-HORIZONTA ' + 
				'GRID-FACTOR-VERTICAL GRID-FACTOR-V GRID-FACTOR-VE GRID-FACTOR-VER GRID-FACTOR-VERT GRID-FACTOR-VERT GRID-FACTOR-VERTI GRID-FACTOR-VERTIC GRID-FACTOR-VERTICA ' +
				'GRID-SNAP ' +
				'GRID-UNIT-HEIGHT-CHARS GRID-UNIT-HEIGHT GRID-UNIT-HEIGHT- GRID-UNIT-HEIGHT-C GRID-UNIT-HEIGHT-CH GRID-UNIT-HEIGHT-CHA ' +
				'GRID-UNIT-HEIGHT-PIXELS GRID-UNIT-HEIGHT-P GRID-UNIT-HEIGHT-PI GRID-UNIT-HEIGHT-PIX GRID-UNIT-HEIGHT-PIXE GRID-UNIT-HEIGHT-PIXEL ' +
				'GRID-UNIT-WIDTH-CHARS GRID-UNIT-WIDTH GRID-UNIT-WIDTH- GRID-UNIT-WIDTH-C GRID-UNIT-WIDTH-CH GRID-UNIT-WIDTH-CHA GRID-UNIT-WIDTH-CHAR ' +
				'GRID-UNIT-WIDTH-PIXELS GRID-UNIT-WIDTH-P GRID-UNIT-WIDTH-PI GRID-UNIT-WIDTH-PIX GRID-UNIT-WIDTH-PIXE GRID-UNIT-WIDTH-PIXEL ' + 
				'GRID-VISIBLE GROUP GT GUID HANDLER HAS-RECORDS HAVING HEADER ' +
				'HEIGHT-CHARS HEIGHT HEIGHT- HEIGHT-C HEIGHT-CH HEIGHT-CHA HEIGHT-CHAR ' +
				'HEIGHT-PIXELS HEIGHT-P HEIGHT-PI HEIGHT-PIX HEIGHT-PIXE HEIGHT-PIXEL ' + 
				'HELP HEX-DECODE HEX-ENCODE HIDDEN HIDE ' +
				'HORIZONTAL HORI HORIZ HORIZO HORIZON HORIZONT HORIZONTA ' +
				'HOST-BYTE-ORDER HTML-CHARSET HTML-END-OF-LINE HTML-END-OF-PAGE ' +
				'HTML-FRAME-BEGIN HTML-FRAME-END HTML-HEADER-BEGIN HTML-HEADER-END ' +
				'HTML-TITLE-BEGIN HTML-TITLE-END HWND ICON IF ' +
				'IMAGE IMAGE-DOWN IMAGE-INSENSITIVE IMAGE-SIZE ' +
				'IMAGE-SIZE-CHARS IMAGE-SIZE-C IMAGE-SIZE-CH IMAGE-SIZE-CHA IMAGE-SIZE-CHAR ' +
				'IMAGE-SIZE-PIXELS IMAGE-SIZE-P IMAGE-SIZE-PI IMAGE-SIZE-PIX IMAGE-SIZE-PIXE IMAGE-SIZE-PIXEL ' + 
				'IMAGE-UP IMMEDIATE-DISPLAY IMPLEMENTS IMPORT IMPORT-PRINCIPAL ' +
				'IN INCREMENT-EXCLUSIVE-ID INDEX INDEXED-REPOSITION INDEX-HINT ' +
				'INDEX-INFORMATION INDICATOR ' +
				'INFORMATION INFO INFOR INFORM INFORMA INFORMAT INFORMATI INFORMATIO ' +
				'IN-HANDLE ' +
				'INHERIT-BGCOLOR INHERIT-BGC INHERIT-BGCO INHERIT-BGCOL INHERIT-BGCOLO ' +
				'INHERIT-FGCOLOR INHERIT-FGC INHERIT-FGCO INHERIT-FGCOL INHERIT-FGCOLO ' +
				'INHERITS INITIAL INIT INITI INITIA INITIAL-DIR INITIAL-FILTER ' +
				'INITIALIZE-DOCUMENT-TYPE INITIATE INNER-CHARS INNER-LINES INPUT ' +
				'INPUT-OUTPUT INPUT-O INPUT-OU INPUT-OUT INPUT-OUTP INPUT-OUTPU ' + 
				'INPUT-VALUE INSERT INSERT-ATTRIBUTE ' +
				'INSERT-BACKTAB INSERT-B INSERT-BA INSERT-BAC INSERT-BACK INSERT-BACKT INSERT-BACKTA ' +
				'INSERT-FILE INSERT-ROW INSERT-STRING INSERT-TAB INSERT-T INSERT-TA ' +
				'INTERFACE INTERNAL-ENTRIES INTO INVOKE IS ' +
				'IS-ATTR-SPACE IS-ATTR IS-ATTR- IS-ATTR-S IS-ATTR-SP IS-ATTR-SPA IS-ATTR-SPAC ' +
				'IS-CLASS IS-CLAS IS-LEAD-BYTE IS-ATTR IS-OPEN IS-PARAMETER-SET IS-ROW-SELECTED ' +
				'IS-SELECTED ITEM ITEMS-PER-ROW JOIN JOIN-BY-SQLDB KBLABEL KEEP-CONNECTION-OPEN ' +
				'KEEP-FRAME-Z-ORDER KEEP-FRAME-Z KEEP-FRAME-Z- KEEP-FRAME-Z-O KEEP-FRAME-Z-OR KEEP-FRAME-Z-ORD KEEP-FRAME-Z-ORDE ' +
				'KEEP-MESSAGES KEEP-SECURITY-CACHE KEEP-TAB-ORDER KEY KEYCODE KEY-CODE ' +
				'KEYFUNCTION KEYFUNC KEYFUNCT KEYFUNCTI KEYFUNCTIO ' +
				'KEY-FUNCTION KEY-FUNC KEY-FUNCT KEY-FUNCTI KEY-FUNCTIO ' +
				'KEYLABEL KEY-LABEL KEYS KEYWORD KEYWORD-ALL LABEL ' +
				'LABEL-BGCOLOR LABEL-BGC LABEL-BGCO LABEL-BGCOL LABEL-BGCOLO ' +
				'LABEL-DCOLOR LABEL-DC LABEL-DCO LABEL-DCOL LABEL-DCOLO ' +
				'LABEL-FGCOLOR LABEL-FGC LABEL-FGCO LABEL-FGCOL LABEL-FGCOLO ' +
				'LABEL-FONT ' +
				'LABEL-PFCOLOR LABEL-PFC LABEL-PFCO LABEL-PFCOL LABEL-PFCOLO ' +
				'LABELS LANDSCAPE LANGUAGES LANGUAGE LARGE LARGE-TO-SMALL LAST ' +
				'LAST-ASYNCH-REQUEST LAST-BATCH LAST-CHILD LAST-EVENT LAST-EVEN LAST-FORM ' +
				'LASTKEY LAST-KEY LAST-OBJECT LAST-OF ' +
				'LAST-PROCEDURE LAST-PROCE LAST-PROCED LAST-PROCEDU LAST-PROCEDUR ' +
				'LAST-SERVER LAST-TAB-ITEM LAST-TAB-I LAST-TAB-IT LAST-TAB-ITE ' +
				'LC LDBNAME LE LEAVE LEFT-ALIGNED LEFT-ALIGN LEFT-ALIGNE LEFT-TRIM ' +
				'LENGTH LIBRARY LIKE LIKE-SEQUENTIAL LINE LINE-COUNTER LINE-COUNT LINE-COUNTE ' +
				'LIST-EVENTS LISTING LISTI LISTIN LIST-ITEM-PAIRS LIST-ITEMS ' +
				'LIST-PROPERTY-NAMES LIST-QUERY-ATTRS LIST-SET-ATTRS LIST-WIDGETS ' +
				'LITERAL-QUESTION LITTLE-ENDIAN LOAD LOAD-DOMAINS LOAD-ICON ' +
				'LOAD-IMAGE LOAD-IMAGE-DOWN LOAD-IMAGE-INSENSITIVE LOAD-IMAGE-UP ' +
				'LOAD-MOUSE-POINTER LOAD-MOUSE-P LOAD-MOUSE-PO LOAD-MOUSE-POI LOAD-MOUSE-POIN LOAD-MOUSE-POINT LOAD-MOUSE-POINTE ' +
				'LOAD-PICTURE LOAD-SMALL-ICON LOCAL-NAME LOCATOR-COLUMN-NUMBER ' +
				'LOCATOR-LINE-NUMBER LOCATOR-PUBLIC-ID LOCATOR-SYSTEM-ID LOCATOR-TYPE ' +
				'LOCKED LOCK-REGISTRATION LOG LOG-AUDIT-EVENT LOGIN-EXPIRATION-TIMESTAMP ' +
				'LOGIN-HOST LOGIN-STATE LOG-MANAGER LOGOUT LOOKAHEAD LOOKUP LT ' +
				'MACHINE-CLASS MANDATORY MANUAL-HIGHLIGHT MAP MARGIN-EXTRA ' +
				'MARGIN-HEIGHT-CHARS MARGIN-HEIGHT MARGIN-HEIGHT- MARGIN-HEIGHT-C MARGIN-HEIGHT-CH MARGIN-HEIGHT-CHA MARGIN-HEIGHT-CHAR ' +
				'MARGIN-HEIGHT-PIXELS MARGIN-HEIGHT-P MARGIN-HEIGHT-PI MARGIN-HEIGHT-PIX MARGIN-HEIGHT-PIXE MARGIN-HEIGHT-PIXEL ' + 
				'MARGIN-WIDTH-CHARS MARGIN-WIDTH MARGIN-WIDTH- MARGIN-WIDTH-C MARGIN-WIDTH-CH MARGIN-WIDTH-CHA MARGIN-WIDTH-CHAR ' +
				'MARGIN-WIDTH-PIXELS MARGIN-WIDTH-P MARGIN-WIDTH-PI MARGIN-WIDTH-PIX MARGIN-WIDTH-PIXE MARGIN-WIDTH-PIXEL ' + 
				'MARK-NEW MARK-ROW-STATE MATCHES MAX MAX-BUTTON ' +
				'MAX-CHARS MAX-DATA-GUESS MAX-HEIGHT ' +
				'MAX-HEIGHT-CHARS MAX-HEIGHT-C MAX-HEIGHT-CH MAX-HEIGHT-CHA MAX-HEIGHT-CHAR ' +
				'MAX-HEIGHT-PIXELS MAX-HEIGHT-P MAX-HEIGHT-PI MAX-HEIGHT-PIX MAX-HEIGHT-PIXE MAX-HEIGHT-PIXEL ' +
				'MAXIMIZE MAXIMUM MAX MAXI MAXIM MAXIMU MAXIMUM-LEVEL MAX-ROWS ' +
				'MAX-SIZE MAX-VALUE MAX-VAL MAX-VALU MAX-WIDTH ' +
				'MAX-WIDTH-CHARS MAX-WIDTH MAX-WIDTH- MAX-WIDTH-C MAX-WIDTH-CH MAX-WIDTH-CHA MAX-WIDTH-CHAR ' +
				'MAX-WIDTH-PIXELS MAX-WIDTH-P MAX-WIDTH-PI MAX-WIDTH-PIX MAX-WIDTH-PIXE MAX-WIDTH-PIXEL ' + 
				'MD5-DIGEST MEMBER MEMPTR-TO-NODE-VALUE MENU MENUBAR MENU-BAR MENU-ITEM ' +
				'MENU-KEY MENU-K MENU-KE MENU-MOUSE MENU-M MENU-MO MENU-MOU MENU-MOUS ' +
				'MERGE-BY-FIELD MESSAGE MESSAGE-AREA MESSAGE-AREA-FONT MESSAGE-LINES ' +
				'METHOD MIN MIN-BUTTON ' +
				'MIN-COLUMN-WIDTH-CHARS MIN-COLUMN-WIDTH-C MIN-COLUMN-WIDTH-CH MIN-COLUMN-WIDTH-CHA MIN-COLUMN-WIDTH-CHAR ' +
				'MIN-COLUMN-WIDTH-PIXELS MIN-COLUMN-WIDTH-P MIN-COLUMN-WIDTH-PI MIN-COLUMN-WIDTH-PIX MIN-COLUMN-WIDTH-PIXE MIN-COLUMN-WIDTH-PIXEL ' + 
				'MIN-HEIGHT-CHARS MIN-HEIGHT MIN-HEIGHT- MIN-HEIGHT-C MIN-HEIGHT-CH MIN-HEIGHT-CHA MIN-HEIGHT-CHAR ' +
				'MIN-HEIGHT-PIXELS MIN-HEIGHT-P MIN-HEIGHT-PI MIN-HEIGHT-PIX MIN-HEIGHT-PIXE MIN-HEIGHT-PIXEL ' + 
				'MINIMUM MIN MINI MINIM MINIMU MIN-SIZE ' +
				'MIN-VALUE MIN-VAL MIN-VALU ' +
				'MIN-WIDTH-CHARS MIN-WIDTH MIN-WIDTH- MIN-WIDTH-C MIN-WIDTH-CH MIN-WIDTH-CHA MIN-WIDTH-CHAR ' +
				'MIN-WIDTH-PIXELS MIN-WIDTH-P MIN-WIDTH-PI MIN-WIDTH-PIX MIN-WIDTH-PIXE MIN-WIDTH-PIXEL ' + 
				'MODIFIED MODULO MOD MODU MODUL MONTH MOUSE ' +
				'MOUSE-POINTER MOUSE-P MOUSE-PO MOUSE-POI MOUSE-POIN MOUSE-POINT MOUSE-POINTE ' +
				'MOVABLE ' +
				'MOVE-AFTER-TAB-ITEM MOVE-AFTER MOVE-AFTER- MOVE-AFTER-T MOVE-AFTER-TA MOVE-AFTER-TAB MOVE-AFTER-TAB- MOVE-AFTER-TAB-I MOVE-AFTER-TAB-IT MOVE-AFTER-TAB-ITE ' +
				'MOVE-BEFORE-TAB-ITEM MOVE-BEFOR MOVE-BEFORE MOVE-BEFORE- MOVE-BEFORE-T MOVE-BEFORE-TA MOVE-BEFORE-TAB MOVE-BEFORE-TAB- MOVE-BEFORE-TAB-I MOVE-BEFORE-TAB-IT MOVE-BEFORE-TAB-ITE ' +
				'MOVE-COLUMN MOVE-COL MOVE-COLU MOVE-COLUM ' +
				'MOVE-TO-BOTTOM MOVE-TO-B MOVE-TO-BO MOVE-TO-BOT MOVE-TO-BOTT MOVE-TO-BOTTO ' + 
				'MOVE-TO-EOF MOVE-TO-TOP MOVE-TO-T MOVE-TO-TO MPE MULTI-COMPILE MULTIPLE ' +
				'MULTIPLE-KEY MULTITASKING-INTERVAL MUST-EXIST NAME NAMESPACE-PREFIX ' +
				'NAMESPACE-URI NATIVE NE NEEDS-APPSERVER-PROMPT NEEDS-PROMPT NEW ' +
				'NEW-INSTANCE NEW-ROW NEXT NEXT-COLUMN NEXT-PROMPT NEXT-ROWID ' +
				'NEXT-SIBLING NEXT-TAB-ITEM NEXT-TAB-I NEXT-TAB-IT NEXT-TAB-ITE ' + 
				'NEXT-VALUE NO NO-APPLY NO-ARRAY-MESSAGE NO-ASSIGN ' +
				'NO-ATTR-LIST NO-ATTR NO-ATTR- NO-ATTR-L NO-ATTR-LI NO-ATTR-LIS ' +
				'NO-ATTR-SPACE NO-ATTR NO-ATTR- NO-ATTR-S NO-ATTR-SP NO-ATTR-SPA NO-ATTR-SPAC ' +
				'NO-AUTO-VALIDATE NO-BIND-WHERE NO-BOX NO-CONSOLE NO-CONVERT ' +
				'NO-CONVERT-3D-COLORS NO-CURRENT-VALUE NO-DEBUG NODE-VALUE-TO-MEMPTR ' +
				'NO-DRAG NO-ECHO NO-EMPTY-SPACE NO-ERROR NO-FILL NO-F NO-FI ' +
				'NO-FIL NO-FOCUS NO-HELP NO-HIDE NO-INDEX-HINT ' +
				'NO-INHERIT-BGCOLOR NO-INHERIT-BGC NO-INHERIT-BGCO LABEL-BGCOL LABEL-BGCOLO ' +
				'NO-INHERIT-FGCOLOR NO-INHERIT-FGC NO-INHERIT-FGCO NO-INHERIT-FGCOL NO-INHERIT-FGCOLO ' +
				'NO-JOIN-BY-SQLDB NO-LABELS NO-LABE NO-LOBS NO-LOCK ' +
				'NO-LOOKAHEAD NO-MAP ' +
				'NO-MESSAGE NO-MES NO-MESS NO-MESSA NO-MESSAG ' +
				'NONAMESPACE-SCHEMA-LOCATION NONE NO-PAUSE ' +
				'NO-PREFETCH NO-PREFE NO-PREFET NO-PREFETC NORMALIZE ' +
				'NO-ROW-MARKERS NO-SCROLLBAR-VERTICAL NO-SEPARATE-CONNECTION ' +
				'NO-SEPARATORS NOT NO-TAB-STOP NOT-ACTIVE ' +
				'NO-UNDERLINE NO-UND NO-UNDE NO-UNDER NO-UNDERL NO-UNDERLI NO-UNDERLIN ' +
				'NO-UNDO ' +
				'NO-VALIDATE NO-VAL NO-VALI NO-VALID NO-VALIDA NO-VALIDAT NOW ' +
				'NO-WAIT NO-WORD-WRAP NULL NUM-ALIASES NUM-ALI NUM-ALIA NUM-ALIAS NUM-ALIASE ' +
				'NUM-BUFFERS NUM-BUTTONS NUM-BUT NUM-BUTT NUM-BUTTO NUM-BUTTON ' +
				'NUM-COLUMNS NUM-COL NUM-COLU NUM-COLUM NUM-COLUMN NUM-COPIES ' +
				'NUM-DBS NUM-DROPPED-FILES NUM-ENTRIES NUMERIC ' +
				'NUMERIC-FORMAT NUMERIC-F NUMERIC-FO NUMERIC-FOR NUMERIC-FORM NUMERIC-FORMA ' + 
				'NUM-FIELDS NUM-FORMATS NUM-ITEMS NUM-ITERATIONS NUM-LINES ' +
				'NUM-LOCKED-COLUMNS NUM-LOCKED-COL NUM-LOCKED-COLU NUM-LOCKED-COLUM NUM-LOCKED-COLUMN ' +
				'NUM-MESSAGES NUM-PARAMETERS NUM-REFERENCES NUM-REPLACED NUM-RESULTS NUM-SELECTED-ROWS ' +
				'NUM-SELECTED-WIDGETS NUM-SELECTED NUM-SELECTED- NUM-SELECTED-W NUM-SELECTED-WI NUM-SELECTED-WID NUM-SELECTED-WIDG NUM-SELECTED-WIDGE NUM-SELECTED-WIDGET ' +
				'NUM-TABS NUM-TO-RETAIN NUM-VISIBLE-COLUMNS OCTET-LENGTH OF ' +
				'OFF OK OK-CANCEL OLD ON ' +
				'ON-FRAME-BORDER ON-FRAME ON-FRAME- ON-FRAME-B ON-FRAME-BO ON-FRAME-BOR ON-FRAME-BORD ON-FRAME-BORDE ' +
				'OPEN OPSYS OPTION OR ORDERED-JOIN ORDINAL ' +
				'OS-APPEND OS-COMMAND OS-COPY OS-CREATE-DIR OS-DELETE OS-DIR ' +
				'OS-DRIVES OS-DRIVE OS-ERROR OS-GETENV OS-RENAME OTHERWISE ' +
				'OUTPUT OVERLAY OVERRIDE OWNER PAGE ' +
				'PAGE-BOTTOM PAGE-BOT PAGE-BOTT PAGE-BOTTO PAGED ' +
				'PAGE-NUMBER PAGE-NUM PAGE-NUMB PAGE-NUMBE PAGE-SIZE ' +
				'PAGE-TOP PAGE-WIDTH PAGE-WID PAGE-WIDT ' +
				'PARAMETER PARAM PARAME PARAMET PARAMETE ' +
				'PARENT PARSE-STATUS PARTIAL-KEY PASCAL PASSWORD-FIELD PATHNAME PAUSE ' +
				'PBE-HASH-ALGORITHM PBE-HASH-ALG PBE-HASH-ALGO PBE-HASH-ALGOR PBE-HASH-ALGORI PBE-HASH-ALGORIT PBE-HASH-ALGORITH ' +
				'PBE-KEY-ROUNDS PDBNAME PERSISTENT PERSIST PERSISTE PERSISTEN ' + 
				'PERSISTENT-CACHE-DISABLED PFCOLOR PFC PFCO PFCOL PFCOLO PIXELS ' +
				'PIXELS-PER-COLUMN PIXELS-PER-COL PIXELS-PER-COLU PIXELS-PER-COLUM ' + 
				'PIXELS-PER-ROW POPUP-MENU POPUP-M POPUP-ME POPUP-MEN ' + 
				'POPUP-ONLY POPUP-O POPUP-ON POPUP-ONL PORTRAIT POSITION ' +
				'PRECISION PREFER-DATASET PREPARED PREPARE-STRING ' +
				'PREPROCESS PREPROC PREPROCE PREPROCES ' +
				'PRESELECT PRESEL PRESELE PRESELEC PREV PREV-COLUMN ' +
				'PREV-SIBLING ' +
				'PREV-TAB-ITEM PREV-TAB-I PREV-TAB-IT PREV-TAB-ITE ' +
				'PRIMARY PRINTER PRINTER-CONTROL-HANDLE PRINTER-HDC ' +
				'PRINTER-NAME PRINTER-PORT PRINTER-SETUP PRIVATE ' +
				'PRIVATE-DATA PRIVATE-D PRIVATE-DA PRIVATE-DAT ' + 
				'PRIVILEGES ' +
				'PROCEDURE PROCE PROCED PROCEDU PROCEDUR ' +
				'PROCEDURE-CALL-TYPE ' +
				'PROCESS ' +
				'PROC-HANDLE PROC-HA PROC-HAN PROC-HAND PROC-HANDL ' +
				'PROC-STATUS PROC-ST PROC-STA PROC-STAT PROC-STATU ' +
				'proc-text proc-text-buffer ' +
				'PROFILER PROGRAM-NAME PROGRESS ' +
				'PROGRESS-SOURCE PROGRESS-S PROGRESS-SO PROGRESS-SOU PROGRESS-SOUR PROGRESS-SOURC ' +
				'PROMPT PROMPT-FOR PROMPT-F PROMPT-FO PROMSGS PROPATH ' +
				'PROPERTY PROTECTED PROVERSION PROVERS PROVERSI PROVERSIO ' +
				'PROXY PROXY-PASSWORD PROXY-USERID PUBLIC PUBLIC-ID ' +
				'PUBLISH PUBLISHED-EVENTS PUT PUTBYTE PUT-BYTE PUT-DOUBLE ' +
				'PUT-FLOAT PUT-INT64 PUT-KEY-VALUE PUT-KEY-VAL PUT-KEY-VALU PUT-LONG ' +
				'PUT-SHORT PUT-STRING PUT-UNSIGNED-LONG QUERY QUERY-CLOSE QUERY-OFF-END ' +
				'QUERY-OPEN QUERY-PREPARE QUERY-TUNING QUESTION QUIT QUOTER ' +
				'RADIO-BUTTONS RADIO-SET RANDOM RAW-TRANSFER ' +
				'RCODE-INFORMATION RCODE-INFO RCODE-INFOR RCODE-INFORM RCODE-INFORMA RCODE-INFORMAT RCODE-INFORMATI RCODE-INFORMATIO ' +
				'READ-AVAILABLE READ-EXACT-NUM READ-FILE READKEY READ-ONLY READ-XML READ-XMLSCHEMA ' +
				'REAL RECORD-LENGTH RECTANGLE RECT RECTA RECTAN RECTANG RECTANGL ' + 
				'RECURSIVE REFERENCE-ONLY REFRESH REFRESHABLE REFRESH-AUDIT-POLICY ' +
				'REGISTER-DOMAIN RELEASE REMOTE REMOVE-EVENTS-PROCEDURE REMOVE-SUPER-PROCEDURE ' +
				'REPEAT REPLACE REPLACE-SELECTION-TEXT REPOSITION REPOSITION-BACKWARD ' +
				'REPOSITION-FORWARD REPOSITION-MODE REPOSITION-TO-ROW REPOSITION-TO-ROWID ' +
				'REQUEST RESET RESIZABLE RESIZA RESIZAB RESIZABL RESIZE RESTART-ROW ' +
				'RESTART-ROWID RETAIN RETAIN-SHAPE RETRY RETRY-CANCEL RETURN ' +
				'RETURN-INSERTED RETURN-INS RETURN-INSE RETURN-INSER RETURN-INSERT RETURN-INSERTE ' +
				'RETURNS RETURN-TO-START-DIR RETURN-TO-START-DI ' + 
				'RETURN-VALUE RETURN-VAL RETURN-VALU ' +
				'RETURN-VALUE-DATA-TYPE REVERSE-FROM REVERT ' +
				'REVOKE RGB-VALUE RIGHT-ALIGNED RETURN-ALIGN RETURN-ALIGNE ' +
				'RIGHT-TRIM R-INDEX ROLES ROUND ROUTINE-LEVEL ROW ' +
				'ROW-HEIGHT-CHARS HEIGHT ROW-HEIGHT-PIXELS HEIGHT-P ROW-MARKERS ' +
				'ROW-OF ROW-RESIZABLE RULE RUN RUN-PROCEDURE SAVE SAVE-AS ' +
				'SAVE-FILE SAX-COMPLETE SAX-COMPLE SAX-COMPLET SAX-PARSE SAX-PARSE-FIRST ' +
				'SAX-PARSE-NEXT SAX-PARSER-ERROR SAX-RUNNING SAX-UNINITIALIZED ' +
				'SAX-WRITE-BEGIN SAX-WRITE-COMPLETE SAX-WRITE-CONTENT SAX-WRITE-ELEMENT ' +
				'SAX-WRITE-ERROR SAX-WRITE-IDLE SAX-WRITER SAX-WRITE-TAG SCHEMA ' +
				'SCHEMA-LOCATION SCHEMA-MARSHAL SCHEMA-PATH SCREEN SCREEN-IO ' +
				'SCREEN-LINES SCREEN-VALUE SCREEN-VAL SCREEN-VALU SCROLL SCROLLABLE ' +
				'SCROLLBAR-HORIZONTAL SCROLLBAR-H SCROLLBAR-HO SCROLLBAR-HOR SCROLLBAR-HORI SCROLLBAR-HORIZ SCROLLBAR-HORIZO SCROLLBAR-HORIZON SCROLLBAR-HORIZONT SCROLLBAR-HORIZONTA ' + 
				'SCROLL-BARS ' +
				'SCROLLBAR-VERTICAL SCROLLBAR-V SCROLLBAR-VE SCROLLBAR-VER SCROLLBAR-VERT SCROLLBAR-VERTI SCROLLBAR-VERTIC SCROLLBAR-VERTICA ' +
				'SCROLL-DELTA ' +
				'SCROLLED-ROW-POSITION SCROLLED-ROW-POS SCROLLED-ROW-POSI SCROLLED-ROW-POSIT SCROLLED-ROW-POSITI SCROLLED-ROW-POSITIO ' +
				'SCROLLING SCROLL-OFFSET SCROLL-TO-CURRENT-ROW SCROLL-TO-ITEM SCROLL-TO-I SCROLL-TO-IT SCROLL-TO-ITE ' + 
				'SCROLL-TO-SELECTED-ROW SDBNAME SEAL SEAL-TIMESTAMP SEARCH SEARCH-SELF SEARCH-TARGET ' +
				'SECTION SECURITY-POLICY SEEK SELECT SELECTABLE SELECT-ALL ' +
				'SELECTED SELECT-FOCUSED-ROW SELECTION SELECTION-END SELECTION-LIST ' +
				'SELECTION-START SELECTION-TEXT SELECT-NEXT-ROW SELECT-PREV-ROW ' +
				'SELECT-ROW SELF SEND send-sql-statement send-sql SENSITIVE ' +
				'SEPARATE-CONNECTION SEPARATOR-FGCOLOR SEPARATORS SERVER ' +
				'SERVER-CONNECTION-BOUND SERVER-CONNECTION-BOUND-REQUEST ' +
				'SERVER-CONNECTION-CONTEXT SERVER-CONNECTION-ID SERVER-OPERATING-MODE ' +
				'SESSION SESSION-ID SET SET-APPL-CONTEXT SET-ATTR-CALL-TYPE SET-ATTRIBUTE-NODE ' +
				'SET-BLUE-VALUE SET-BLUE SET-BLUE- SET-BLUE-V SET-BLUE-VA SET-BLUE-VAL SET-BLUE-VALU ' +
				'SET-BREAK SET-BUFFERS SET-CALLBACK SET-CLIENT SET-COMMIT SET-CONTENTS ' +
				'SET-CURRENT-VALUE SET-DB-CLIENT SET-DYNAMIC SET-EVENT-MANAGER-OPTION ' +
				'SET-GREEN-VALUE SET-GREEN SET-GREEN- SET-GREEN-V SET-GREEN-VA SET-GREEN-VAL SET-GREEN-VALU ' +
				'SET-INPUT-SOURCE SET-OPTION SET-OUTPUT-DESTINATION SET-PARAMETER SET-POINTER-VALUE ' +
				'SET-PROPERTY SET-RED-VALUE SET-RED SET-RED- SET-RED-V SET-RED-VA SET-RED-VAL SET-RED-VALU ' +
				'SET-REPOSITIONED-ROW SET-RGB-VALUE SET-ROLLBACK SET-SELECTION SET-SIZE ' +
				'SET-SORT-ARROW SETUSERID SETUSER SETUSERI SET-WAIT-STATE SHA1-DIGEST SHARED ' +
				'SHARE-LOCK SHARE SHARE- SHARE-L SHARE-LO SHARE-LOC SHOW-IN-TASKBAR SHOW-STATS SHOW-STAT ' +
				'SIDE-LABEL-HANDLE SIDE-LABEL-H SIDE-LABEL-HA SIDE-LABEL-HAN SIDE-LABEL-HAND SIDE-LABEL-HANDL ' +
				'SIDE-LABELS SIDE-LAB SIDE-LABE SIDE-LABEL ' + 
				'SILENT SIMPLE SINGLE SIZE ' +
				'SIZE-CHARS SIZE-C SIZE-CH SIZE-CHA SIZE-CHAR ' +
				'SIZE-PIXELS SIZE-P SIZE-PI SIZE-PIX SIZE-PIXE SIZE-PIXEL SKIP ' +
				'SKIP-DELETED-RECORD SLIDER SMALL-ICON SMALLINT SMALL-TITLE SOME SORT ' +
				'SORT-ASCENDING SORT-NUMBER SOURCE SOURCE-PROCEDURE SPACE SQL SQRT ' +
				'SSL-SERVER-NAME STANDALONE START START-DOCUMENT START-ELEMENT START-MOVE ' +
				'START-RESIZE START-ROW-RESIZE STATE-DETAIL STATIC STATUS STATUS-AREA STATUS-AREA-FONT ' +
				'STDCALL STOP STOP-PARSING STOPPED STOPPE ' + 
				'STORED-PROCEDURE STORED-PROC STORED-PROCE STORED-PROCED STORED-PROCEDU STORED-PROCEDUR ' +
				'STREAM STREAM-HANDLE STREAM-IO STRETCH-TO-FIT STRICT STRING STRING-VALUE STRING-XREF ' +
				'SUB-AVERAGE SUB-AVE SUB-AVER SUB-AVERA SUB-AVERAG ' +
				'SUB-COUNT SUB-MAXIMUM SUM-MAX SUM-MAXI SUM-MAXIM SUM-MAXIMU SUB-MENU SUBSUB- ' +
				'MINIMUM SUB-MIN SUBSCRIBE SUBSTITUTE SUBST SUBSTI SUBSTIT SUBSTITU SUBSTITUT ' + 
				'SUBSTRING SUBSTR SUBSTRI SUBSTRIN SUB-TOTAL SUBTYPE SUM SUPER SUPER-PROCEDURES ' +
				'SUPPRESS-NAMESPACE-PROCESSING ' +
				'SUPPRESS-WARNINGS SUPPRESS-W SUPPRESS-WA SUPPRESS-WAR SUPPRESS-WARN SUPPRESS-WARNI SUPPRESS-WARNIN SUPPRESS-WARNING ' +
				'SYMMETRIC-ENCRYPTION-ALGORITHM SYMMETRIC-ENCRYPTION-IV SYMMETRIC-ENCRYPTION-KEY SYMMETRIC-SUPPORT ' +
				'SYSTEM-ALERT-BOXES SYSTEM-ALERT SYSTEM-ALERT- SYSTEM-ALERT-B SYSTEM-ALERT-BO SYSTEM-ALERT-BOX SYSTEM-ALERT-BOXE ' +
				'SYSTEM-DIALOG SYSTEM-HELP SYSTEM-ID TABLE TABLE-HANDLE TABLE-NUMBER TAB-POSITION ' +
				'TAB-STOP TARGET TARGET-PROCEDURE ' +
				'TEMP-DIRECTORY TEMP-DIR TEMP-DIRE TEMP-DIREC TEMP-DIRECT TEMP-DIRECTO TEMP-DIRECTOR ' +
				'TEMP-TABLE TEMP-TABLE-PREPARE TERM TERMINAL TERM TERMI TERMIN TERMINA ' +
				'TERMINATE TEXT TEXT-CURSOR TEXT-SEG-GROW TEXT-SELECTED THEN ' +
				'THIS-OBJECT THIS-PROCEDURE THREE-D THROW THROUGH THRU TIC-MARKS TIME ' +
				'TIME-SOURCE TITLE ' +
				'TITLE-BGCOLOR TITLE-BGC TITLE-BGCO TITLE-BGCOL TITLE-BGCOLO ' +
				'TITLE-DCOLOR TITLE-DC TITLE-DCO TITLE-DCOL TITLE-DCOLO ' +
				'TITLE-FGCOLOR TITLE-FGC TITLE-FGCO TITLE-FGCOL TITLE-FGCOLO ' +
				'TITLE-FONT TITLE-FO TITLE-FON ' +
				'TO TODAY TOGGLE-BOX TOOLTIP TOOLTIPS TOPIC TOP-NAV-QUERY TOP-ONLY ' +
				'TO-ROWID TOTAL TRAILING TRANS TRANSACTION TRANSACTION-MODE ' +
				'TRANS-INIT-PROCEDURE TRANSPARENT TRIGGER TRIGGERS TRIM ' +
				'TRUE TRUNCATE TRUNC TRUNCA TRUNCAT TYPE TYPE-OF ' +
				'UNBOX UNBUFFERED UNBUFF UNBUFFE UNBUFFER UNBUFFERE ' +
				'UNDERLINE UNDERL UNDERLI UNDERLIN UNDO ' +
				'UNFORMATTED UNFORM UNFORMA UNFORMAT UNFORMATT UNFORMATTE UNION ' +
				'UNIQUE UNIQUE-ID UNIQUE-MATCH UNIX UNLESS-HIDDEN UNLOAD ' +
				'UNSIGNED-LONG UNSUBSCRIBE UP UPDATE UPDATE-ATTRIBUTE ' +
				'URL URL-DECODE URL-ENCODE URL-PASSWORD URL-USERID USE ' +
				'USE-DICT-EXPS USE-FILENAME USE-INDEX USER USE-REVVIDEO ' +
				'USERID USER-ID USE-TEXT USE-UNDERLINE USE-WIDGET-POOL ' +
				'USING V6DISPLAY V6FRAME VALIDATE VALIDATE-EXPRESSION ' +
				'VALIDATE-MESSAGE VALIDATE-SEAL VALIDATION-ENABLED VALID-EVENT ' +
				'VALID-HANDLE VALID-OBJECT VALUE VALUE-CHANGED VALUES ' +
				'VARIABLE VAR VARI VARIA VARIAB VARIABL VERBOSE ' +
				'VERSION VERTICAL VERT VERTI VERTIC VERTICA ' +
				'VIEW VIEW-AS VIEW-FIRST-COLUMN-ON-REOPEN ' +
				'VIRTUAL-HEIGHT-CHARS VIRTUAL-HEIGHT VIRTUAL-HEIGHT- VIRTUAL-HEIGHT-C VIRTUAL-HEIGHT-CH VIRTUAL-HEIGHT-CHA VIRTUAL-HEIGHT-CHAR ' +
				'VIRTUAL-HEIGHT-PIXELS VIRTUAL-HEIGHT-P VIRTUAL-HEIGHT-PI VIRTUAL-HEIGHT-PIX VIRTUAL-HEIGHT-PIXE VIRTUAL-HEIGHT-PIXEL ' + 
				'VIRTUAL-WIDTH-CHARS VIRTUAL-WIDTH VIRTUAL-WIDTH- VIRTUAL-WIDTH-C VIRTUAL-WIDTH-CH VIRTUAL-WIDTH-CHA VIRTUAL-WIDTH-CHAR ' +
				'VIRTUAL-WIDTH-PIXELS VIRTUAL-WIDTH-P VIRTUAL-WIDTH-PI VIRTUAL-WIDTH-PIX VIRTUAL-WIDTH-PIXE VIRTUAL-WIDTH-PIXEL ' + 
				'VISIBLE VOID WAIT WAIT-FOR WARNING WEB-CONTEXT WEEKDAY WHEN ' +
				'WHERE WHILE WIDGET ' +
				'WIDGET-ENTER WIDGET-E WIDGET-EN WIDGET-ENT WIDGET-ENTE ' +
				'WIDGET-ID ' +
				'WIDGET-LEAVE WIDGET-L WIDGET-LE WIDGET-LEA WIDGET-LEAV ' +
				'WIDGET-POOL WIDTH ' +
				'WIDTH-CHARS WIDTH WIDTH- WIDTH-C WIDTH-CH WIDTH-CHA WIDTH-CHAR ' +
				'WIDTH-PIXELS WIDTH-P WIDTH-PI WIDTH-PIX WIDTH-PIXE WIDTH-PIXEL ' + 
				'WINDOW ' +
				'WINDOW-MAXIMIZED WINDOW-MAXIM WINDOW-MAXIMI WINDOW-MAXIMIZ WINDOW-MAXIMIZE ' +
				'WINDOW-MINIMIZED WINDOW-MINIM WINDOW-MINIMI WINDOW-MINIMIZ WINDOW-MINIMIZE ' +
				'WINDOW-NAME WINDOW-NORMAL WINDOW-STATE WINDOW-STA WINDOW-STAT ' +
				'WINDOW-SYSTEM WITH WORD-INDEX WORD-WRAP WORK-AREA-HEIGHT-PIXELS ' +
				'WORK-AREA-WIDTH-PIXELS WORK-AREA-X WORK-AREA-Y WORKFILE ' +
				'WORK-TABLE WORK-TAB WORK-TABL WRITE WRITE-CDATA WRITE-CHARACTERS ' +
				'WRITE-COMMENT WRITE-DATA-ELEMENT WRITE-EMPTY-ELEMENT WRITE-ENTITY-REF ' +
				'WRITE-EXTERNAL-DTD WRITE-FRAGMENT WRITE-MESSAGE ' +
				'WRITE-PROCESSING-INSTRUCTION WRITE-STATUS WRITE-XML WRITE-XMLSCHEMA ' +
				'X XCODE XML-DATA-TYPE XML-NODE-TYPE XML-SCHEMA-PATH ' +
				'XML-SUPPRESS-NAMESPACE-PROCESSING X-OF XREF ' +
				'XREF-XML Y YEAR YEAR-OFFSET YES YES-NO ' +
				'YES-NO-CANCEL Y-OF ';

		var primitivedatatypes =	'CHARACTER CHAR	CHARA CHARAC CHARACT CHARACTE ' +
						'COM-HANDLE DATE DATETIME DATETIME-TZ ' +
						'DECIMAL DEC DECI DECIM DECIMA HANDLE ' +
						'INT64 INTEGER INT INTE INTEG INTEGE ' +
						'LOGICAL LONGCHAR MEMPTR RAW RECID ROWID';

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },		// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },		// single quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,			css: 'comments' },		// comments
			{ regex: new RegExp(this.getKeywords(primitivedatatypes), 'gmi'),	css: 'variable' },		// primitive datatypes
			{ regex: new RegExp(this.getKeywords(keywords),  'gmi'),		css: 'keyword' },		// keywords (including non-primitive datatypes)
			{ regex: /\s*{&.*}/gm,							css: 'preprocessor' },		// preprocessor directives like {&MY_DIRECTIVE}
			{ regex: /\s*&.*/gm,							css: 'preprocessor' },		// preprocessor directives like &BATCH-MODE
			{ regex: /\s*{[^&].*}/gm,						css: 'functions' }		// include files
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['progress', 'abl', 'openedge'];

	SyntaxHighlighter.brushes.Progress = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
