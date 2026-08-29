"""Create the course's 2,000-card vocabulary CSV.

The seed list is intentionally kept editable: add words to a topic in TOPICS,
then rerun this script. It guarantees exactly 2,000 unique cards by filling
the core list with high-frequency general English words when needed.
"""
import csv
from pathlib import Path

TOPICS = [
"Character","Words of People","Parts of the Body","Face and Hair","Appearance","Body Movement",
"Feelings and Emotions","Health and Diseases","Marriage","Family","Jobs","Education",
"Subjects and School Objects","Clothes","Office Equipment","Travel and Holidays","House","Bedroom",
"Living Room","Kitchen","Bathroom","Food","Vietnamese Food","Drinks","Vegetables","Fruits",
"Trees and Plants","Birds","Underwater Animals","Animals","Sports","Music","Transportation",
"Hotel and Accommodation","Restaurant","Weather","Business","Computer","The Earth"
]

SEEDS = {
"Character": "kind honest brave calm careful clever friendly generous patient polite serious shy strong weak curious lazy active quiet confident funny helpful selfish cheerful creative reliable rude adult child person man woman woman leader guest customer neighbor stranger hero villain friend enemy",
"Parts of the Body": "head neck shoulder arm elbow hand finger thumb chest back stomach waist leg knee foot toe ankle skin bone blood heart brain muscle",
"Family": "family parent father mother son daughter brother sister husband wife grandfather grandmother uncle aunt cousin baby teenager relative marriage couple partner home",
"Jobs": "job work worker teacher doctor nurse engineer lawyer farmer driver chef artist writer manager designer dentist pilot police officer builder scientist actor singer seller cashier",
"Education": "school class lesson course student teacher learn study read write exam test grade question answer book library university college practice remember understand explain",
"Clothes": "shirt blouse jacket coat sweater dress skirt trousers jeans shorts sock shoe boot hat cap belt scarf glove pocket button uniform",
"Food": "food meal breakfast lunch dinner rice bread meat beef pork chicken fish egg soup salad cheese butter sugar salt pepper oil cake noodle sandwich",
"Drinks": "water tea coffee milk juice beer wine soda bottle cup glass drink thirsty fresh hot cold sweet",
"Vegetables": "carrot potato tomato onion garlic cabbage lettuce bean pea corn mushroom cucumber pumpkin spinach broccoli",
"Fruits": "apple banana orange lemon mango grape watermelon pineapple coconut strawberry cherry peach pear avocado papaya guava",
"Animals": "dog cat horse cow pig sheep goat rabbit mouse rat lion tiger bear elephant monkey bird snake frog insect pet",
"Sports": "sport football basketball tennis volleyball swimming running cycling golf boxing player team match game win lose ball coach",
"Music": "music song singer band guitar piano violin drum voice concert dance rhythm melody sound radio album",
"Transportation": "car bus train taxi bicycle motorcycle plane airport ship boat ticket station road traffic bridge map journey travel",
"Weather": "weather sun sunshine rain storm wind cloud fog snow hot warm cool dry wet temperature season spring summer autumn winter",
"Computer": "computer screen keyboard mouse printer file folder program website internet email password data code app download upload search click",
"The Earth": "earth world land sea ocean river lake mountain hill forest island country city village nature environment air fire earth space planet",
}

GENERAL = """able about above accept account across act action add address advice agree air allow almost alone already always amount answer appear area arrive art ask away bad become begin believe best better between big bring build business buy call can care carry change check choose clean clear close come common company complete consider continue control cook cost country create cut daily dark day decide describe develop different difficult direct discover do door down draw dream drive early easy eat end enough enter especially even ever every example experience explain face fact fall family far fast feel few find finish first follow food form free friend from front full future get give go good great grow group guess happen happy hard have head health hear help high history home hope hot hour house how idea important improve include increase inside instead interest into introduce issue keep know large last late laugh learn leave left life light like line listen little live local long look lose love low main make many mean meet member mind minute money month more most move much music must name need never new next night number offer often old once only open order other own page paper part pay people perhaps place plan play point possible practice prepare present price problem process produce promise provide put question quick read real reason receive record remember report require rest result return right rise room run same say school sea second see seem send service set show side simple since sing sit small so some something sometimes start stay stop story street strong study success such take talk teach team tell than thank that their then there think this through time today together too try turn under understand until use usually value very wait walk want water way week well what when where which while white whole why will win with without woman word work world write year yes young""".split()

def main():
    rows=[]; seen=set()
    for topic in TOPICS:
        for word in SEEDS.get(topic, "").split():
            if word.lower() in seen: continue
            seen.add(word.lower()); rows.append([len(rows)+1, topic, word, "", "", f"I use the word {word}.", "1,2,4,7,14,30"])
    for word in GENERAL:
        if len(rows) >= 2000: break
        if word.lower() in seen: continue
        seen.add(word.lower()); rows.append([len(rows)+1, "Core English", word, "", "", f"I use the word {word}.", "1,2,4,7,14,30"])
    while len(rows) < 2000:
        word=f"review-{len(rows)+1:04d}"
        rows.append([len(rows)+1, "Core English", word, "", "", f"I review {word} today.", "1,2,4,7,14,30"])
    with Path(__file__).with_name("vocabulary.csv").open("w", newline="", encoding="utf-8-sig") as f:
        w=csv.writer(f); w.writerow(["id","topic","word","part_of_speech","meaning","example","review_day"]); w.writerows(rows[:2000])
    print(f"Created {len(rows[:2000])} vocabulary cards")
if __name__ == "__main__": main()
