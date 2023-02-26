from bs4 import BeautifulSoup as bs
import lxml
import os

arqFilesFolder = "arqFiles"
port = 7777

if os.path.exists(arqFilesFolder):
    print("Folder already exists")
else:
    os.mkdir(arqFilesFolder)

indexInfo =[]
arqList=[]
soup = None
encoding = "iso-8859-1"
indexPageInfo=[]

with open("arq.xml", "r") as file:
    
    soup = bs(file, "xml")


counter = 1
for tag in soup.find_all("ARQELEM"):
    indexPageInfo.append(tag.find("IDENTI").string)
    
    xmlHeader = '<?xml version="1.0" encoding="utf-8"?>\n'
    xmlFile = xmlHeader + tag.prettify()
    #print(xmlFile)
    open("arqFiles/arq" + str(counter) + ".xml", "w").write(xmlFile)
    counter += 1
#print(counter)

open
# open an index.html to write on it

indexFile = open("index.html", "w+")

indexFile.write("""
<!DOCTYPE html>\n
    <html>\n
        <head>\n
            <title>Mapa Virtual</title>\n
            <meta charset={0}/>\n
        </head>\n
        <body>\n""".format(encoding))
for i in range(1, counter):
    indexFile.write("""
        <a href="http://localhost:{0}/{1}">{2}</a><br>\n""".format(port, i, indexPageInfo[i-1]))
indexFile.write("</body>\n</html>\n")
