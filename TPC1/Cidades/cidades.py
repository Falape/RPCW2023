import json
from pprint import pprint

with open('mapa.json', 'r') as f:
    data = json.load(f)

cities = sorted(data["cidades"], key=lambda elem: elem["nome"])

citiesDic = {}
for city in cities:
    if city['id'] not in citiesDic:
        citiesDic[city['id']] = city

connections = data['ligações']

fullConnections = {}
for connection in connections:
    if connection['origem'] not in fullConnections:
        fullConnections[connection['origem']] = []
        fullConnections[connection['origem']].append(connection['destino'])
    else:
        fullConnections[connection['origem']].append(connection['destino'])
    
    if connection['destino'] not in fullConnections:
        fullConnections[connection['destino']] = []
        fullConnections[connection['destino']].append(connection['origem'])
    else:
        fullConnections[connection['destino']].append(connection['origem'])



def  generateConnections(idOrigem):
    returnHtml = "Não existem ligações!"
    if id in fullConnections and len(fullConnections[id])>0:

        returnHtml = f'<a href="#{fullConnections[id][0]}"> {citiesDic[fullConnections[id][0]]["nome"]}</a>'   
        
        for i in range(1,len(fullConnections[id])):
            returnHtml += f', <a href="#{fullConnections[id][i]}"> {citiesDic[fullConnections[id][i]]["nome"]}</a>'
    
    return returnHtml
        


htmlPage = open("index.html", "w+")

webPage = """<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Virtual</h1>
        <table>
            <tr>
                <td witdh="30%" valign="top">
                    <h3><a name="indice"/>Indice</h3>
                    <ul>
"""

for id in citiesDic:
    webPage += f'<li><a href="#{id}">{citiesDic[id]["nome"]}</a>\n</li>\n'

webPage += "</td><td width=\"70%\">"

for id in citiesDic:
    webPage += f'<a name="{id}"/>\n'
    webPage += f'<h3>{citiesDic[id]["nome"]}</h3>\n'
    webPage += f'<p><b>População</b>: {citiesDic[id]["população"]}</p>\n'
    webPage += f'<p><b>Descrição</b>: {citiesDic[id]["descrição"]}</p>\n'
    webPage += f'<p><b>Distrito</b>: {citiesDic[id]["distrito"]}</p>\n'
    webPage += f'<p><b>Ligações</b>: {generateConnections(id)}</p>\n'
    webPage += '<address>[<a href="#indice"> Voltar para o Índice]</address>\n'
    webPage += f'<center><hr width="80%"/></center>\n'

webPage += """</td>
            </tr>
        </table>
    </body>
</html>
"""

htmlPage.write(webPage)
