case=input("Enter Preemptive or Non-Preemptive ")
c = 0
s = 1
l = []
def Up(n):
    global c
    global s
    global l
    if s == 0 or s == 1:
        print("Process",n,"Completed")
        l.pop(0)
    else:
        pass
def Down(n):
    global c
    global l
    global s
    l.append(n)
    print("The queue is", l[1::])
    if s == 1:
        s = 0
    else:
        pass
if case == "Preemptive":
    print("Enter the No of process :",end=" ")
    k=int(input())
    print()
    for i in range(k):
        Down(i+1)
    for i in range(k):
        Up(i+1)
elif case == "Non-Preemptive":
    print("Enter the No of process : ",end=" ")
    k=int(input())
    print()
    for i in range(k):
        Down(i+1)
        Up(i+1)