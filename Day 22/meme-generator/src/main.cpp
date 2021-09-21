#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    cout << "enter your string";
    cin>>s;
    string tmp = "";
    for(int i = 0; i < s.length(); ++i) {
        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
            tmp += s[i];
        }
    }
    cout<<tmp<<endl; 
    return 0;
}