import requests
import json
from bs4 import BeautifulSoup

def main():
    website = input()
    source = requests.get(website)
    text = source.content
    soup = BeautifulSoup(text,"html.parser")
    spliz = soup.find_all('div',{'class':'cd__content'})
    list_links = []
    for i in spliz:
        if 'index.html' not in i.a.get('href') or 'live-news' in i.a.get('href'):
            continue
        list_links.append(i.a.get('href'))
    data = {}
    data['CNN'] = []
    for i in list_links:
        hold = []
        print(i)
        hold  = article(i)
        data['CNN'].append({'author':hold[0],'hyperlink':hold[1],
                            'publication_date':hold[2],
                            'tittle':hold[3],
                            'description':hold[4],
                            'image':hold[5]})
    print(data)
    dump(data)
def article(web):
    website = 'http://www.cnn.com'+web
    source = requests.get(website)
    text = source.content
    soup = BeautifulSoup(text,"html.parser")

    ar = soup.find('meta',{'itemprop':'author'})

    author = ar.get('content') if soup.find('meta',{'itemprop':'author'}) else 'None'
    hyperlink = soup.find('meta',{'itemprop':'url'}).get('content')
    publication_date = soup.find('meta',{'itemprop':'datePublished'}).get('content')
    tittle = soup.find('meta',{'itemprop':'headline'}).get('content')
    description = soup.find('meta',{'itemprop':'description'}).get('content')
    image = soup.find('meta',{'itemprop':'image'}).get('content')
    return author,hyperlink,publication_date,tittle,description,image


def dump(info):
    with open('data.txt','w') as outfile:
        json.dump(info,outfile)





main()
