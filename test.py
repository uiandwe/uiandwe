import asyncio
import datetime
import random


async def display_date(num, loop):
    end_time = loop.time() + 5.0

    while True:
        print("Loop: {} Time: {}".format(num, datetime.datetime.now()))
        if (loop.time() + 1.0) >= end_time:
            return
        await asyncio.sleep(random.randint(0, 5))


async def main(loop):
    f = []
    for i in range(5):
        f.append(display_date(i, loop))
    await asyncio.gather(*f)

loop = asyncio.get_event_loop()  # 이벤트 루프를 얻음
loop.run_until_complete(main(loop))  # hello가 끝날 때까지 기다림
loop.close()
